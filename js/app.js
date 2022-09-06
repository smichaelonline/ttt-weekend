/*-------------------------------- Constants --------------------------------*/

let winningCombos = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]
  ]

  //console.log(winningCombos)


/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

let squareEls = document.querySelectorAll(".board > div")
let messageEl = document.querySelector('#message')
let boardEl = document.querySelector('.board')
const resetBtnEl = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click',init)

/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  board = [null,null,null,null,null,null,null,null,null]
  //console.log(board)
  turn = 1 //represents player X
  winner = null
  render()
}

function render(){
  // loop through function to check if square is 1, -1, or null
  board.forEach(function(sq, idx) {
    if (sq === 1) {
      squareEls[idx].textContent = 'X'
      squareEls[idx].innerHTML = '<img id="sushi" src="https://i.pinimg.com/originals/ee/43/c8/ee43c8a6d714fff89ce371930a44a773.jpg" width="100px">'
    } else if (sq === -1) {
      squareEls[idx].textContent = 'O'
      squareEls[idx].innerHTML = '<img id="chinese-food" src="https://i.pinimg.com/originals/95/91/85/95918563b52db5e196061091a9a9cdcd.jpg" width="100px">'
    } else {
      squareEls[idx].textContent = ''
    }
  })
  if (winner === null) {
    if(turn === 1) {
      messageEl.textContent = "Yummy sushi! Player one - it's your turn!"
    } else {
      messageEl.textContent = "Chinese food? Delish! Player two - it's your turn!"
    }
  } else if (winner === 'T') {
    messageEl.textContent = "Why not both? It's a tie!"
  } else if (winner === 1) {
    messageEl.textContent = "Good choice! Sushi wins!"
  } else if (winner === -1) {
    messageEl.textContent = "Chinese food wins - sign me up! "
  }
}

//!! STEP 6a-6h within handle click function!!!
function handleClick(evt){
  console.log(evt)
  const sqIdx = parseInt(evt.target.id[2])
  //console.log(sqIdx)
  if (winner) {
    return  
  } 

  if (board[sqIdx]){
    return
  }

  board[sqIdx]= turn 
  turn = turn * -1
  
  winner = getWinner()
  render()
}

function getWinner(){
  let bestCombo = []
  winningCombos.forEach(function(combo){
    //combo will look like [0,1,2]
    let comboValue = board[combo[0]]+ board[combo[1]]+ board[combo[2]]
    //console.log(board)
    bestCombo.push(Math.abs(comboValue))
  })
  let winnersCombo = bestCombo.some(function(value){
    return value === 3
  })

  if (winnersCombo === true){
    return turn * -1
  } else if (!board.some((value)=> value === null)){
    return 'T'
  } 
  return null
}


