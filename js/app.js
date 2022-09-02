/*-------------------------------- Constants --------------------------------*/

let winningCombos = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]
  ]

  console.log(winningCombos)


/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

let squareEls = document.querySelectorAll(".board > div")
let messageEl = document.querySelector('#message')
let boardEl = document.querySelector('.board')

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)


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

//!! STEP 6a-6h within handle click function!!!
function handleClick(evt){
  const sqIdx = parseInt(evt.target.id[2])
  //console.log(sqIdx)
  if (winner === 1 || winner === -1) {
    return  
  } 

  if (board[sqIdx]){
    return
  }

  board[sqIdx]= turn 
  turn = turn * -1
}