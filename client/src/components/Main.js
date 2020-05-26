import React, { useEffect, useState } from 'react';
import Row from './Row';

const Main = () => {
  const [grid, setGrid] = useState([]);

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

  return (
    <div className="main-wrap">

      <h1>Conway's Game of Life</h1>

      <div className="boxes-wrap">

        <div className="left-box">
          <h2>Generation: #</h2>
          <div className="grid">
            <div style={{}}>
              {grid.map((row, i)=> {
                return <Row row={row} key={i}/>
              })}
            </div>
          </div>
          <div className="buttons">
            <button>Play</button>
            <button>Pause</button>
            <button>Stop</button>
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