import React from 'react';
import Cell from './Cell';


const Row = ( { row }) => {

  return (
    <div style={{display: 'grid', textAlign: 'left', 
                 gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr '}}>
      {row.map((cell, i) => {
        return <Cell cell={cell} key={i}/>
      })}
    </div>
  )
}

export default Row