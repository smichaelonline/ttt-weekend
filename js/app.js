/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

let squareEls = document.querySelectorAll(".board > div")
let messageEl = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  board = [null,null,null,null,null,null,null,null,null]
  console.log(board)
  turn = 1 //represents player X
  winner = null
  render()
}

function render(){
  // loop through function to check if square is 1, -1, or null
  board.forEach(function(sq, idx) {
    if (sq === 1) {
      squareEls[idx].textContent = 'X'
    } else if (sq === -1) {
      squareEls[idx].textContent = '0'
    } else {
      squareEls[idx].textContent = ''
    }
  })
  if (winner === null) {
    if(turn === 1) {
      messageEl.textContent = "Player one - it's your turn!"
    } else {
      messageEl.textContent = "Player two - it's your turn!"
    }
  } else if (winner === 'T') {
    messageEl.textContent = "Looks like it's a tie!"
  } else if (winner === 1) {
    messageEl.textContent = "Player one wins!"
  } else if (winner === -1) {
    messageEl.textContent = "Player two wins!"
  }
}
  
