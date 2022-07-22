import {useState } from 'react'

function Square(props) {

    return (

        <button disabled={props.gameOver} onClick={props.setMove}>
            {props.value ? props.value : "-"}
        </button>
    )
  }



function Board() {
const [squares,setSquares] = useState(Array(9).fill(""))
const[xIsNext, setXIsNext] = useState(true)

function handleClick(index) {

  const clonedSquares = squares.slice()

  if(clonedSquares[index]){
    return
  }

  clonedSquares[index] = xIsNext ? "X" : "O"

  const winner = checkWinner(clonedSquares)
  if(winner){
    console.log(winner)
  }

  setXIsNext(!xIsNext)

    setSquares(clonedSquares)


}

function renderSquare(index) {
  return(
    <Square gameOver={checkWinner(squares)} value={squares[index]} setMove={() => handleClick(index)}/>

  )
}

function resetBoard() {
  setSquares(Array(9).fill(""))
}

function checkWinner(squares) {
  const winningCominations = [
    [0,4,8],
    [0,1,2],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]

  ]
  

  for(let i =0; i<winningCominations.length; i++){
  const [a,b,c] = winningCominations[i]
  if(squares[a] && squares[a] == squares[b] && squares[b] == squares[c]){
    return squares[a]
  }
  }
}


  return (
    <div >
        <div>  
          {renderSquare(0)}
          {renderSquare(1)}  
          {renderSquare(2)}    
          

        </div>
        
        <div>
        {renderSquare(3)}  
        {renderSquare(4)}  
        {renderSquare(5)}  
        </div>
        
        <div>
        {renderSquare(6)}
        {renderSquare(7)}  
        {renderSquare(8)}    
        </div>

      <button onClick={resetBoard}> reset</button>
    </div>
  )
}






const Game = () => {


  return (
    <Board/>
  )
}

export default Game