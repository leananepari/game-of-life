import React from 'react';
import Cell from './Cell';


const Row = ( { row, setGrid }) => {

  return (
    <div style={{display: 'grid', textAlign: 'left', backgroundColor: '#3c3636',
                //  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr '}}>
                //  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
                gridTemplateColumns: 'repeat(55, 1fr)'}}>

      {row.map((cell, j) => {
        return <Cell cell={cell} key={j} 
                     setGrid={setGrid} 
                     />
      })}
    </div>
  )
}

export default Row