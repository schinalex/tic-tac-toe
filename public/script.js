'use strict'

const log2DArray = (matrix) => {
  for (let row of matrix) {
    console.log(row)
  }
}
const get2DArray = (rows, columns, defaultElement) => {
  let matrix = []
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      row.push(defaultElement)
    }
    matrix.push(row)
  }
  return matrix
}

const board = get2DArray(3, 3, 0)
const app = new Vue({
  el: '#game',
  data: {
    game: {
      board,
      player: 'x',
      mark (x, y) {
        this.board[y].splice(x, 1, this.player)
        console.log(`board[${y}][${x}] marked`)
        log2DArray(this.board)
        this.switchPlayer()
      },
      switchPlayer () {
        this.player === 'x' ? this.player = 'o' : this.player = 'x'
      },
      resetBoard () {
        this.board = get2DArray(3, 3, 0)
        console.log('board refreshed')
        log2DArray(board)
      }
    }
  }
})
