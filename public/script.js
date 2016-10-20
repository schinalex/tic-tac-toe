'use strict'

const get2DArray = (rows, columns, defaultElement) => {
  let matrix = []
  for (let i = 0; i < rows; i += 1) {
    let row = []
    for (let j = 0; j < columns; j += 1) {
      row.push(defaultElement)
    }
    matrix.push(row)
  }
  return matrix
}
const checkIfWon = (mark, matrix) => {
  const board = matrix
  let won = false
  for (let i = 0; i < 3; i += 1) {
    if (board[i][0] === mark && board[i][1] === mark && board[i][2] === mark) {
      won = true
    }
  }
  for (let i = 0; i < 3; i += 1) {
    if (board[0][i] === mark && board[1][i] === mark && board[2][i] === mark) {
      won = true
    }
  }
  if (board[0][0] === mark && board[1][1] === mark && board[2][2] === mark) {
    won = true
  }
  if (board[2][0] === mark && board[1][1] === mark && board[0][2] === mark) {
    won = true
  }
  return won
}

const board = get2DArray(3, 3, 0)
const app = new Vue({
  el: '#game',
  data: {
    game: {
      board,
      player: 'x',
      totalMoves: 0,
      over: false,
      message: '',
      mark (x, y) {
        this.board[y].splice(x, 1, this.player)
        this.totalMoves += 1
        let playerWon = checkIfWon(this.player, this.board)
        if (playerWon) {
          this.over = true
          this.message = `Player ${this.player} Won!`
        } else if (this.totalMoves === 9) {
          this.over = true
          this.message = `Draw!`
        } else {
          this.switchPlayer()
        }
      },
      switchPlayer () {
        this.player === 'x' ? this.player = 'o' : this.player = 'x'
      },
      resetBoard () {
        this.board = get2DArray(3, 3, 0)
        this.over = false
        this.totalMoves = 0
        this.message = ''
      }
    }
  }
})
