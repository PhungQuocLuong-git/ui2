import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  const temp = [0, 1, 2];

  return (
    <div>
      {
        temp.map(i =>
        (
          <div key={i + "abc"} className="board-row">
            {
              temp.map(j => renderSquare(3 * i + j))
            }
          </div>
        )
        )
      }
    </div>
  );
}

function Game(props) {

  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      latestCheck:[]
      
    }
  ])

  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const [selectedItem, setSelectedItem] = useState(0)

  const handleClick = (i) => {
    const historyTemp = history.slice(0, stepNumber + 1);
    const current = historyTemp[historyTemp.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(historyTemp.concat([
      {
        squares: squares,
        latestCheck: [i%3, Math.floor(i/3)]
      }
    ]))
    setStepNumber(historyTemp.length);
    setXIsNext(!xIsNext)
    setSelectedItem(selectedItem+1)
    
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0)
  }

  const handleSelectItem = (i) => {
    jumpTo(i);
    setSelectedItem(i);
    // console.log("item chon ", i);
  }
  
  console.log(history);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    console.log("step",step);
    const desc = move ?
      'Go to move #' + move + ". Position :" + step.latestCheck.toString():
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => { handleSelectItem(move) }} className={selectedItem === move ? "bold-text" : ""}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
