import React from 'react';
import produce from 'immer';

const Cell = ( { cell, setGrid }) => {

  return (
    <div onClick={() => {
      setGrid(grid => {
        return produce(grid, gridCopy => {
          gridCopy[cell.coor[0]][cell.coor[1]].alive = grid[cell.coor[0]][cell.coor[1]].alive ? 
                   false : true
        })
      })

    }} style={{border: '1px solid gray',  borderRadius: '43%', height: '15px', width: '100%', 
                 backgroundColor: 
                 `${cell.alive && cell.age < 10 ? '#afacac' : 
                    cell.alive && cell.age < 30 ? '#FFFF00' : 
                    cell.alive && cell.age < 35 ? '#FFFF33' : 
                    cell.alive && cell.age < 40 ? '#E6FB04' : 
                    cell.alive && cell.age < 45 ? '#00FF00' : 
                    cell.alive && cell.age < 50 ? '#00FF66' : 
                    cell.alive && cell.age < 55 ? '#33FF00' :
                    cell.alive && cell.age < 60 ? '#FF0099' : 
                    cell.alive && cell.age < 65 ? '#FF00CC' : 
                    cell.alive && cell.age < 70 ? '#FF00FF' : 
                    cell.alive && cell.age < 75 ? '#CC00FF' : 
                    cell.alive && cell.age < 80 ? '#9D00FF' : 
                    cell.alive && cell.age < 85 ? '#6E0DD0' : 
                    cell.alive && cell.age < 90 ? '#00FFFF' : 
                    cell.alive && cell.age < 95 ? '#099FFF' : 
                    cell.alive && cell.age < 100 ? '#0062FF' : 
                    cell.alive && cell.age < 105 ? '#0033FF' : 
                    cell.alive && cell.age < 120 ? '#FF0000' : 
                    cell.alive && cell.age < 135 ? '#FD1C03' : 
                    cell.alive && cell.age < 145 ? '#FF3300' : 
                    cell.alive && cell.age > 145 ? '#FF6600' : 
                    '#3f3a4e'}`}}>  
    </div>
  )
}

export default Cell