import React from 'react';
import Cell from './Cell';


const Row = ( { row, setGrid }) => {

  return (
    <div style={{display: 'grid', textAlign: 'left', 
                 gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
      {row.map((cell, j) => {
        return <Cell cell={cell} key={j} setGrid={setGrid}/>
      })}
    </div>
  )
}

export default Row