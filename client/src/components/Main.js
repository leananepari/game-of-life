import React, { useEffect, useState } from 'react';
import Row from './Row';
import Preset from './Preset';

const Main = () => {
  const [grid, setGrid] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState('');
  const presets = [{name: 'Preset 1'}, {name: 'Preset 2'},
                   {name: 'Preset 3'}]

  useEffect(() => {
    // build the grid 25x25

    let arr = new Array(25)
    
    for(let i = 0; i < arr.length; i++) {
      arr[i] = new Array(25)
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = {alive: false}
      }
    }

    arr[3][5]['alive'] = true
    setGrid(arr)

  }, [])

  const startSimulation = () => {
    
  }

  const pauseSimulation = () => {

  }

  const stopSimulation = () => {

  }

  return (
    <div className="main-wrap">

      <h1>Conway's Game of Life</h1>

      <div className="boxes-wrap">

        <div className="left-box">
          <h2>Generation: #</h2>
          <div className="grid-wrap">
            <div className="grid">
              <div style={{}}>
                {grid.map((row, i)=> {
                  return <Row row={row} key={i}/>
                })}
              </div>
            </div>
            <div className="presets">
              {presets.map((preset, i) => {
                return <Preset preset={preset} key={i} setSelectedPreset={setSelectedPreset} selectedPreset={selectedPreset}/>
              })}
            </div>
          </div>
          <div className="buttons">
            <button onClick={startSimulation}>Play</button>
            <button onClick={pauseSimulation}>Pause</button>
            <button onClick={stopSimulation}>Stop</button>
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