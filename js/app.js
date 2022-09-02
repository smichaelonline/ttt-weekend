/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

let guessesEl = document.querySelector("div")
let messageEl = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  board = [null,null,null,null,null,null,null,null,null]
  turn = 1 //represents player X
  winner = null 
  render()
}

