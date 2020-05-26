import React from 'react';

const Main = () => {

  return (
    <div className="main-wrap">

      <h1>Conway's Game of Life</h1>

      <div className="boxes-wrap">

        <div className="left-box">
          <h2>Generation: #</h2>
          <div className="grid">
            <div style={{width: '100%', height: '200px', backgroundColor: 'gray'}}></div>
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