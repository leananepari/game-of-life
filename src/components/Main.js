import React, { useEffect, useState, useRef, useCallback } from 'react';
import Preset from './Preset';
import Grid from './Grid';
import produce from 'immer';
import { preset1, preset2, preset3, randomPreset, countNeighbors, wrapCellsAround } from '../utils/helper';
import img from '../assets/bracket.png';


const Main = () => {
  const [grid, setGrid] = useState([]);
  const [width, setWidth] = useState(); //set the width of the window 

  const [selectedPreset, setSelectedPreset] = useState('');
  const selectedPresetRef = useRef(selectedPreset);
  selectedPresetRef.current = selectedPreset;

  const presets = [{name: 'Spaceships', func: preset1}, 
                   {name: 'Oscillators', func: preset2},
                   {name: 'Glider Gun', func: preset3},
                   {name: 'Randomize', func: randomPreset}]
  const [reload, setReload] = useState(false);

  const [simulate, setSimulate] = useState(false);
  const simulateRef = useRef(simulate);
  simulateRef.current = simulate;

  const [generation, setGeneration] = useState(0);


  useEffect(() => {
    // set the width of the window
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    if (!simulateRef.current) {
      let arr = new Array(25);
      
      for(let i = 0; i < arr.length; i++) {
        arr[i] = new Array(75)
      }

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = {alive: false, coor: [i,j], age: 1}
        }
      }
      setGrid(arr)

    } 

  }, [reload])

  const handleResize = () => {
    setWidth(window.innerWidth);
  }


  const startSimulation = useCallback((selectedPreset) => {

    if (!simulateRef.current) {
      return 
    }

    setGeneration((num) => num + 1)


    setGrid(grid => {
      return produce(grid, gridCopy => {

        // make cells wrap around the grid 
        // if it's glider gun pattern don't wrap cells so that it runs infinitely
        const coordinates = {};
        let gliderGun = false;
        if (selectedPresetRef.current === 'Glider Gun') {
          gliderGun = true;
        }
        wrapCellsAround(grid, coordinates, gliderGun);
        

        for (let i = 0; i < grid.length; i++) {

          for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j].alive === true) {
              countNeighbors(grid, gridCopy, coordinates, i, j, true)
            }
            if (grid[i][j].alive === false) {
              countNeighbors(grid, gridCopy, coordinates, i, j, false)

            }
          }
        }
      });

    });

    setTimeout(() => {
      startSimulation()
    }, 0)

  }, [])


  const pauseSimulation = () => {
    setSimulate(false)
  }

  const clearSimulation = () => {
    setSimulate(false);
    setReload(!reload);
    setSelectedPreset('');
    setGeneration(0);
  }


  return (
    <div className="main-wrap">

      <header>
        <h1>Game of Life</h1>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{fontSize: '16px', display: `${width > 500 ? 'block' : 'none'}`}}>rules</div>
          <img style={{width: '65px', height: '65px', display: `${width > 500 ? 'block' : 'none'}`}} src={img}/>
          <div className="rules">
            <div>1. live cell with fewer than two live neighbours dies (underpopulation)</div>
            <div>2. live cell with more than three live neighbours dies (overpopulation)</div>
            <div>3. dead cell with exactly three live neighbours becomes a live cell (reproduction)</div>
            <div>4. live cell with two or three live neighbours lives on to the next generation</div>
          </div>
        </div>
      </header>

      <h2>__generation: # {generation}</h2>

      <Grid grid={grid} setGrid={setGrid} width={width}/>

      <div className="buttons">
        <div className="btn-wrap">
          <button onClick={() => {
                    setSimulate(!simulate);
                    simulateRef.current = true;
                    startSimulation(selectedPreset);
                    }}
                  disabled={simulate ? true : false} style={{border: '1px solid #CC00FF'}}>Play</button>
          <button onClick={pauseSimulation}>Pause</button>
          <button onClick={clearSimulation}>Clear</button>
        </div>
        <div className="presets">
          {presets.map((preset, i) => {

            return <Preset preset={preset} key={i} 
                            setSelectedPreset={setSelectedPreset} 
                            selectedPreset={selectedPreset}
                            setGrid={setGrid}
                            setGeneration={setGeneration}
                            selectedPresetRef={selectedPresetRef}
                            />
          })}
        </div>

      </div>

    </div>
  )
}

export default Main