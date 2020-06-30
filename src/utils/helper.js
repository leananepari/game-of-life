import produce from 'immer';

export const preset1 = (setGrid) => {

    clearGrid(setGrid);

    setGrid(grid => {

      return produce(grid, gridCopy => {

        gridCopy[8][6]['alive'] = true
        gridCopy[9][7]['alive'] = true
        gridCopy[10][5]['alive'] = true
        gridCopy[10][6]['alive'] = true
        gridCopy[10][7]['alive'] = true

        gridCopy[12][16]['alive'] = true
        gridCopy[13][17]['alive'] = true
        gridCopy[14][15]['alive'] = true
        gridCopy[14][16]['alive'] = true
        gridCopy[14][17]['alive'] = true

        gridCopy[16][26]['alive'] = true
        gridCopy[17][27]['alive'] = true
        gridCopy[18][25]['alive'] = true
        gridCopy[18][26]['alive'] = true
        gridCopy[18][27]['alive'] = true

        gridCopy[7][31]['alive'] = true
        gridCopy[6][29]['alive'] = true
        gridCopy[7][27]['alive'] = true
        gridCopy[8][26]['alive'] = true
        gridCopy[9][26]['alive'] = true
        gridCopy[10][26]['alive'] = true
        gridCopy[10][27]['alive'] = true
        gridCopy[10][28]['alive'] = true
        gridCopy[10][29]['alive'] = true
        gridCopy[10][30]['alive'] = true
        gridCopy[9][31]['alive'] = true

      })
    })

}

export const preset2 = (setGrid) => {

  clearGrid(setGrid);

  setGrid(grid => {

    return produce(grid, gridCopy => {

      gridCopy[3][5]['alive'] = true
      gridCopy[3][6]['alive'] = true
      gridCopy[3][7]['alive'] = true
    
      gridCopy[8][15]['alive'] = true
      gridCopy[8][16]['alive'] = true
      gridCopy[8][17]['alive'] = true
    
      gridCopy[13][25]['alive'] = true
      gridCopy[13][26]['alive'] = true
      gridCopy[13][27]['alive'] = true

      gridCopy[Math.floor(grid.length / 2)][Math.floor(grid[0].length / 2)]['alive'] = true
      gridCopy[Math.floor(grid.length / 2)][Math.floor(grid[0].length / 2) + 1]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) + 1][Math.floor(grid[0].length / 2)]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) + 1][Math.floor(grid[0].length / 2) + 1]['alive'] = true

      gridCopy[Math.floor(grid.length / 2) + 2][Math.floor(grid[0].length / 2) + 2]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) + 2][Math.floor(grid[0].length / 2) + 3]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) + 3][Math.floor(grid[0].length / 2) + 2]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) + 3][Math.floor(grid[0].length / 2) + 3]['alive'] = true


      gridCopy[Math.floor(grid.length / 2) - 10][Math.floor(grid[0].length / 2)]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 10][Math.floor(grid[0].length / 2) + 1]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 9][Math.floor(grid[0].length / 2)]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 9][Math.floor(grid[0].length / 2) + 1]['alive'] = true

      gridCopy[Math.floor(grid.length / 2) - 8][Math.floor(grid[0].length / 2) + 2]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 8][Math.floor(grid[0].length / 2) + 3]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 7][Math.floor(grid[0].length / 2) + 2]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 7][Math.floor(grid[0].length / 2) + 3]['alive'] = true

    })
  })

}

export const preset3 = (setGrid) => {

  clearGrid(setGrid);

  setGrid(grid => {

    return produce(grid, gridCopy => {

      gridCopy[Math.floor(grid.length / 2) - 5][5]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5][6]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 + 1][5]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 + 1][6]['alive'] = true

      gridCopy[Math.floor(grid.length / 2) - 5][6 + 9]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 + 1][6 + 9]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5+ 2][6 + 9]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5+ 3][6 + 9 + 1]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 + 4][6 + 9 + 2]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 + 4][6 + 9 + 3]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) -5 + 3][6 + 9 + 5]['alive'] = true
      
      gridCopy[Math.floor(grid.length / 2) - 5 + 2][6 + 9 + 6]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 + 1][6 + 9 + 6]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5][6 + 9 + 6]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 + 1][6 + 9 + 4]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 + 1][6 + 9 + 7]['alive'] = true

      gridCopy[Math.floor(grid.length / 2) - 5 - 1][6 + 10]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2][6 + 11]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2][6 + 12]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) -5 - 1][6 + 14]['alive'] = true

      gridCopy[Math.floor(grid.length / 2) - 5 - 2][6 + 19]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2][6 + 20]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2 + 1][6 + 19]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2 + 1][6 + 20]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5- 2 + 2][6 + 19]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2 + 2][6 + 20]['alive'] = true

      gridCopy[Math.floor(grid.length / 2) - 5 - 3][6 + 21]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2 + 3][6 + 21]['alive'] = true

      gridCopy[Math.floor(grid.length / 2) - 5 - 3][6 + 23]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 4][6 + 23]['alive'] = true

      gridCopy[Math.floor(grid.length / 2) - 5 - 2 + 3][6 + 23]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2 + 4][6 + 23]['alive'] = true

      gridCopy[Math.floor(grid.length / 2) - 5 - 2][6 + 33]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2][6 + 34]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2 + 1][6 + 33]['alive'] = true
      gridCopy[Math.floor(grid.length / 2) - 5 - 2 + 1][6 + 34]['alive'] = true

    })
  })
}

export const randomPreset = (setGrid) => {

    setGrid(grid => {

      return produce(grid, gridCopy => {

        for (let i = 0; i < grid.length; i++) {
          let k = Math.floor((Math.random() * (grid.length - 1)) + 0);
          let j = Math.floor((Math.random() * (grid[0].length - 1)) + 0);
          gridCopy[k][j].alive = true;

          for (let l = 0; l < grid[i].length; l++) {
            let k = Math.floor((Math.random() * (grid.length - 1)) + 0);
            let j = Math.floor((Math.random() * (grid[0].length - 1)) + 0);
            gridCopy[k][j].alive = true;
          }
        }

      })
    })
}


const clearGrid = (setGrid) => {

  let arr = new Array(25);
      
  for(let i = 0; i < arr.length; i++) {
    arr[i] = new Array(75)
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = {alive: false, coor: [i,j], age: 1}
    }
  }
  setGrid(arr)

}

export const countNeighbors = (grid, buffer, coordinates, i, j, state) => {

    let count_neighbors = 0;

    // check the top cell
    if (coordinates.hasOwnProperty(`${i-1},${j}`)) {
      if (coordinates[`${i-1},${j}`] !== null) {
        if (coordinates[`${i-1},${j}`].alive === true) {
          count_neighbors ++;
        }
      }
    } else {
      if (grid[i-1][j].alive === true) {
        count_neighbors ++;
      }
    }

    // check top right corner cell
    if (coordinates.hasOwnProperty(`${i-1},${j+1}`)) {
      if (coordinates[`${i-1},${j+1}`] !== null) {
        if (coordinates[`${i-1},${j+1}`].alive === true) {
          count_neighbors ++;
        }
      }
    } else {
      if (grid[i-1][j+1].alive === true) {
        count_neighbors ++;
      }
    }

    //check cell to the right
    if (coordinates.hasOwnProperty(`${i},${j+1}`)) {
      if (coordinates[`${i},${j+1}`] !== null) {
        if (coordinates[`${i},${j+1}`].alive === true) {
          count_neighbors ++;
        }
      }
    } else {
      if (grid[i][j+1].alive === true) {
        count_neighbors ++;
      }
    }

    //check bottom right corner cell
    if (coordinates.hasOwnProperty(`${i+1},${j+1}`)) {
      if (coordinates[`${i+1},${j+1}`] !== null) {
        if (coordinates[`${i+1},${j+1}`].alive === true) {
          count_neighbors ++;
        }
      } 
    } else {
      if (grid[i+1][j+1].alive === true) {
        count_neighbors ++;
      }
    }

    //check bottom cell
    if (coordinates.hasOwnProperty(`${i+1},${j}`)) {
      if (coordinates[`${i+1},${j}`] !== null) {
        if (coordinates[`${i+1},${j}`].alive === true) {
          count_neighbors ++;
        }
      }
    } else {
      if (grid[i+1][j].alive === true) {
        count_neighbors ++;
      }
    }

    // check bottom left corner cell
    if (coordinates.hasOwnProperty(`${i+1},${j-1}`)) {
      if (coordinates[`${i+1},${j-1}`] !== null) {
        if (coordinates[`${i+1},${j-1}`].alive === true) {
          count_neighbors ++;
        }
      }
    } else {
      if (grid[i+1][j-1].alive === true) {
        count_neighbors ++;
      }
    }

    // check cell to the left
    if (coordinates.hasOwnProperty(`${i},${j-1}`)) {
      if (coordinates[`${i},${j-1}`] !== null) {
        if (coordinates[`${i},${j-1}`].alive === true) {
          count_neighbors ++;
        }
      }
    } else {
      if (grid[i][j-1].alive === true) {
        count_neighbors ++;
      }
    }

    //check top left corner
    if (coordinates.hasOwnProperty(`${i-1},${j-1}`)) {
      if (coordinates[`${i-1},${j-1}`] !== null) {
        if (coordinates[`${i-1},${j-1}`].alive === true) {
          count_neighbors ++;
        }
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
        buffer[i][j].age = 0;

      } else {
        buffer[i][j].age += 1;
      }
    } else if (state === false) {
      if (count_neighbors === 3) {
        buffer[i][j].alive = true;
        buffer[i][j].age += 1;
      } 
    }
  }


export const wrapCellsAround = (grid, coordinates, gliderGun) => {

  const build_top_row = () => {
    let index = 0;

    //add corner cells
    if (!gliderGun) {
      coordinates['-1,-1'] = grid[grid.length - 1][grid[0].length - 1];
      coordinates[`-1,${grid[0].length}`] = grid[grid.length - 1][0];
    } else {
      coordinates['-1,-1'] = null;
      coordinates[`-1,${grid[0].length}`] = null;
    }

    while(index < grid[0].length) {
      if (!gliderGun) {
        coordinates[`-1,${index}`] = grid[grid.length - 1][index];
      } else {
        coordinates[`-1,${index}`] = null;
      }
      index ++;
    }
  }

  const build_bottom_row = () => {
    let index = 0;

    //add corner cells
    if (!gliderGun) {
      coordinates[`${grid.length},-1`] = grid[0][grid.length-1];
      coordinates[`${grid.length},${grid[0].length}`] = grid[0][0];
    } else {
      coordinates[`${grid.length},-1`] = null;
      coordinates[`${grid.length},${grid[0].length}`] = null;
    }

    while(index < grid[0].length) {
      if (!gliderGun) {
        coordinates[`${grid.length},${index}`] = grid[0][index];
      } else {
        coordinates[`${grid.length},${index}`] = null;
      }
      index ++;
    }

  }

  const build_left_col = () => {
    let index = 0;

    while(index < grid.length) {
      if (!gliderGun) {
        coordinates[`${index},-1`] = grid[index][grid[0].length - 1];
      } else {
        coordinates[`${index},-1`] = null;
      }
      index ++;
    }

  }

  const build_right_col = () => {
    let index = 0;

    while(index < grid.length) {
      if (!gliderGun) {
        coordinates[`${index},${grid[0].length}`] = grid[index][0];
      } else {
        coordinates[`${index},${grid[0].length}`] = null;
      }
      index ++;
    }
  }
  build_top_row();
  build_bottom_row();
  build_left_col();
  build_right_col();

}