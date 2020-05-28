import React from 'react';
import Row from './Row';

const Grid = ( { grid, setGrid }) => {

  return (
    <div className="grid">
      <div>
        {grid.map((row, i)=> {
          return <Row row={row} key={i} setGrid={setGrid}/>
        })}
      </div>
    </div>
  )
}

export default Grid