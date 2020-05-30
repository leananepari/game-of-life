import produce from 'immer';

export const preset1 = (setGrid) => {

    clearGrid(setGrid);

    setGrid(grid => {

      return produce(grid, gridCopy => {

        gridCopy[3][5]['alive'] = true
        gridCopy[3][6]['alive'] = true
        gridCopy[3][7]['alive'] = true
      })
    })

}

export const preset2 = (setGrid) => {

  clearGrid(setGrid);

  setGrid(grid => {

    return produce(grid, gridCopy => {

      gridCopy[3][5]['alive'] = true
      gridCopy[3][6]['alive'] = true
      gridCopy[4][6]['alive'] = true
      gridCopy[4][5]['alive'] = true
    
      gridCopy[2][7]['alive'] = true
      gridCopy[3][8]['alive'] = true
      gridCopy[3][9]['alive'] = true
    
      gridCopy[4][8]['alive'] = true
      gridCopy[4][9]['alive'] = true
      gridCopy[5][8]['alive'] = true
      gridCopy[5][9]['alive'] = true
    
      gridCopy[5][6]['alive'] = true
      gridCopy[6][5]['alive'] = true
      gridCopy[6][6]['alive'] = true
    
      gridCopy[7][5]['alive'] = true
      gridCopy[7][6]['alive'] = true
      gridCopy[7][4]['alive'] = true
    
      gridCopy[8][6]['alive'] = true
      gridCopy[9][6]['alive'] = true
      gridCopy[9][7]['alive'] = true
      gridCopy[10][7]['alive'] = true
      gridCopy[10][8]['alive'] = true
      gridCopy[10][9]['alive'] = true
      gridCopy[9][9]['alive'] = true
    
      gridCopy[9][10]['alive'] = true
      gridCopy[8][8]['alive'] = true

    })
  })

}

export const preset3 = (setGrid) => {

}

export const randomPreset = (setGrid) => {

    setGrid(grid => {

      return produce(grid, gridCopy => {

        for (let i = 0; i < grid.length; i++) {
          let k = Math.floor((Math.random() * (grid.length - 1)) + 1);
          let j = Math.floor((Math.random() * (grid[0].length - 1)) + 1);
          gridCopy[k][j].alive = true;

          for (let l = 0; l < grid[i].length; l++) {
            let k = Math.floor((Math.random() * (grid.length - 1)) + 1);
            let j = Math.floor((Math.random() * (grid[0].length - 1)) + 1);
            gridCopy[k][j].alive = true;
          }
        }

      })
    })
}


const clearGrid = (setGrid) => {

  let arr = new Array(25);
      
  for(let i = 0; i < arr.length; i++) {
    arr[i] = new Array(55)
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = {alive: false, coor: [i,j]}
    }
  }
  setGrid(arr)

}

export const countNeighbors = (grid, buffer, coordinates, i, j, state) => {
console.log('NEIGHBORS')
    let count_neighbors = 0;

    // check the top cell
    if (coordinates.hasOwnProperty(`${i-1},${j}`)) {
      if (coordinates[`${i-1},${j}`].alive === true) {
        count_neighbors ++;
      }
    } else {
      if (grid[i-1][j].alive === true) {
        count_neighbors ++;
      }
    }

    // check top right corner cell
    if (coordinates.hasOwnProperty(`${i-1},${j+1}`)) {
      if (coordinates[`${i-1},${j+1}`].alive === true) {
        count_neighbors ++;
      }
    } else {
      if (grid[i-1][j+1].alive === true) {
        count_neighbors ++;
      }
    }

    //check cell to the right
    if (coordinates.hasOwnProperty(`${i},${j+1}`)) {
      if (coordinates[`${i},${j+1}`].alive === true) {
        count_neighbors ++;
      }
    } else {
      if (grid[i][j+1].alive === true) {
        count_neighbors ++;
      }
    }

    //check bottom right corner cell
    if (coordinates.hasOwnProperty(`${i+1},${j+1}`)) {
      if (coordinates[`${i+1},${j+1}`].alive === true) {
        count_neighbors ++;
      } 
    } else {
      if (grid[i+1][j+1].alive === true) {
        count_neighbors ++;
      }
    }

    //check bottom cell
    if (coordinates.hasOwnProperty(`${i+1},${j}`)) {
      if (coordinates[`${i+1},${j}`].alive === true) {
        count_neighbors ++;
      }
    } else {
      if (grid[i+1][j].alive === true) {
        count_neighbors ++;
      }
    }

    // check bottom left corner cell
    if (coordinates.hasOwnProperty(`${i+1},${j-1}`)) {
      if (coordinates[`${i+1},${j-1}`].alive === true) {
        count_neighbors ++;
      }
    } else {
      if (grid[i+1][j-1].alive === true) {
        count_neighbors ++;
      }
    }

    // check cell to the left
    if (coordinates.hasOwnProperty(`${i},${j-1}`)) {
      if (coordinates[`${i},${j-1}`].alive === true) {
        count_neighbors ++;
      }
    } else {
      if (grid[i][j-1].alive === true) {
        count_neighbors ++;
      }
    }

    //check top left corner
    if (coordinates.hasOwnProperty(`${i-1},${j-1}`)) {
      if (coordinates[`${i-1},${j-1}`].alive === true) {
        count_neighbors ++;
      }
    } else {
      if (grid[i-1][j-1].alive === true) {
        count_neighbors ++;
      }
    }

    // should it stay alive or not
    if (state === true) {
      if (count_neighbors < 2 || count_neighbors > 3) {
        buffer[i][j].alive = false;

      } 
    } else if (state === false) {
      if (count_neighbors === 3) {
        buffer[i][j].alive = true;

      } 
    }
  }


export const wrapCellsAround = (grid, coordinates) => {

  const build_top_row = () => {
    let index = 0;

    //add corner cells
    coordinates['-1,-1'] = grid[grid.length - 1][grid[0].length - 1];
    coordinates[`-1,${grid[0].length}`] = grid[grid.length - 1][0];

    while(index < grid[0].length) {
      coordinates[`-1,${index}`] = grid[grid.length - 1][index];
      index ++;
    }
  }

  const build_bottom_row = () => {
    let index = 0;

    //add corner cells
    coordinates[`${grid.length},-1`] = grid[0][grid.length-1];
    coordinates[`${grid.length},${grid[0].length}`] = grid[0][0];

    while(index < grid[0].length) {
      coordinates[`${grid.length},${index}`] = grid[0][index];
      index ++;
    }

  }

  const build_left_col = () => {
    let index = 0;

    while(index < grid.length) {
      coordinates[`${index},-1`] = grid[index][grid[0].length - 1];
      index ++;
    }

  }

  const build_right_col = () => {
    let index = 0;

    while(index < grid.length) {
      coordinates[`${index},${grid[0].length}`] = grid[index][0];
      index ++;
    }
  }
  build_top_row();
  build_bottom_row();
  build_left_col();
  build_right_col();

}