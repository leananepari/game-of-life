import React from 'react';
import produce from 'immer';

const Cell = ( { cell, setGrid }) => {

  return (
    <div onClick={() => {
      setGrid(grid => {
        return produce(grid, gridCopy => {
          gridCopy[cell.coor[0]][cell.coor[1]].alive = grid[cell.coor[0]][cell.coor[1]].alive ? false : true
        })
      })
    }} style={{border: '1px solid gray', height: '15px', width: '15px', 
                 backgroundColor: `${cell.alive ? 'black' : 'white'}`}}>    
    </div>
  )
}

export default Cell