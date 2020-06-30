import React from 'react';
import Row from './Row';

const Grid = ( { grid, setGrid, width }) => {

  return (
    <div className="grid" style={{width: '100%'}}>
      <div>
        {grid.map((row, i)=> {
          return <Row row={row} key={i} setGrid={setGrid} width={width}/>
        })}
      </div>
    </div>
  )
}

export default Grid