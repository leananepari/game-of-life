import React, { useEffect, useState, useRef } from 'react';
import Preset from './Preset';
import Grid from './Grid';
import produce from 'immer';
import { preset1, preset2, preset3, countNeighbors, wrapCellsAround } from './helper';

const Main = () => {
  const [grid, setGrid] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState('');
  const presets = [{name: 'Preset 1', func: preset1}, 
                   {name: 'Preset 2', func: preset2},
                   {name: 'Preset 3', func: preset3}]
  const [reload, setReload] = useState(false);
  const [simulate, setSimulate] = useState(false);
  const simulateRef = useRef(simulate);
  simulateRef.current = simulate;

  useEffect(() => {

    if (!simulateRef.current) {
      let arr = new Array(25);
      
      for(let i = 0; i < arr.length; i++) {
        arr[i] = new Array(25)
      }

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = {alive: false, coor: [i,j]}
        }
      }
      setGrid(arr)

    } 

  }, [reload])


  const startSimulation = () => {

    if (!simulateRef.current) {
      return 
    }

    setGrid(grid => {
      return produce(grid, gridCopy => {

        // make cells wrap around the grid
        const coordinates = {};
        wrapCellsAround(grid, coordinates);
        

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

    setTimeout(startSimulation, 1000)

  }


  const pauseSimulation = () => {
    setSimulate(false)
  }

  const clearSimulation = () => {
    setSimulate(false);
    setReload(!reload);
    setSelectedPreset('');
  }


  return (
    <div className="main-wrap">

      <h1>Conway's Game of Life</h1>

      <div className="boxes-wrap">

        <div className="left-box">
          <h2>Generation: #</h2>
          <div className="grid-wrap">

            <Grid grid={grid} setGrid={setGrid}/>
            <div className="presets">
              {presets.map((preset, i) => {

                return <Preset preset={preset} key={i} 
                               setSelectedPreset={setSelectedPreset} 
                               selectedPreset={selectedPreset}
                               setGrid={setGrid}
                               />
              })}
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => {
                      setSimulate(!simulate);
                      simulateRef.current = true;
                      startSimulation();
                      }}>Play
            </button>
            <button onClick={pauseSimulation}>Pause</button>
            <button onClick={clearSimulation}>Clear</button>
          </div>
        </div>

        <div className="right-box">
          <h2>Rules:</h2>
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Main