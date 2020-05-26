import React from 'react';

const Cell = ( { cell }) => {

  return (
    <div style={{border: '1px solid gray', height: '15px', width: '15px', 
                 backgroundColor: `${cell.alive ? 'black' : 'white'}`}}>    
    </div>
  )
}

export default Cell