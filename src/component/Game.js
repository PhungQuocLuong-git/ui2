import React, { useState } from 'react';
import Board from './Board';
import './index.css';

function Game(props) {

    const [LEN, setLEN] = useState(5);

    const [history, setHistory] = useState([
        {
            squares: Array(LEN * LEN).fill(null),
            latestCheck: []

        }
    ])

    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const [selectedItem, setSelectedItem] = useState(0)
    const [sortBy, setSortBy] = useState(true);
    const [winnerPos, setWinnerPos] = useState([])

    const handleClickSortBy = () => {
        setSortBy(!sortBy)
    }

    const calculateWinner = (squares, LEN) => {
        const lines = [];
        for(let i=0;i<LEN;i++)
        {
          let t = [];
          for(let j=0;j<LEN;j++)
          {
            t.push(i*LEN+j);
          }
          lines.push(t)
        }
      
        for(let i=0;i<LEN;i++)
        {
          let t = [];
          for(let j=0;j<LEN;j++)
          {
            t.push(j*LEN+i);
          }
          lines.push(t)
        }
      
        let t1 =[]
        let t2 = []
        for(let i=0;i<LEN;i++)
        {
          t1.push(i*(LEN+1))
          t2.push((i+1)*(LEN-1))
        }
      
        lines.push(t1);
        lines.push(t2);
        console.log(lines);
      
        for (let i = 0; i < lines.length; i++) {
      
          let flag =0;
          for(let j = 0;j <LEN; j++ )
          {
            if(j===0)
            {
              if (!squares[lines[i][0]]) flag=1;
            }
            else{
              if (squares[lines[i][0]] !== squares[lines[i][j]]) flag=1;
            }
          }
      
          if(flag===0){
            return [squares[lines[i][0]],lines[i]];
          }
          // if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            
          //   return [squares[a],lines[i]];
          // }
        }
        return null;
      }

    const handleClick = (i) => {
        const historyTemp = history.slice(0, stepNumber + 1);
        const current = historyTemp[historyTemp.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares, LEN) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setHistory(historyTemp.concat([
            {
                squares: squares,
                latestCheck: [i % LEN, Math.floor(i / LEN)],
                winnerPos: []
            }
        ]))
        setStepNumber(historyTemp.length);
        setXIsNext(!xIsNext)
        setSelectedItem(selectedItem + 1)

    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0)
    }

    const handleSelectItem = (i) => {
        jumpTo(i);
        setSelectedItem(i);
        setWinnerPos([]);
    }

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares, LEN);


    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move + ". Position :(" + step.latestCheck.toString() + ")" :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => { handleSelectItem(move) }} className={selectedItem === move ? "bold-text" : ""}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = "Winner: " + winner[0];
        if (winnerPos.length === 0) {
            setWinnerPos(winner[1]);
        }
    } else {
        if (history.length <= LEN * LEN) status = "Next player: " + (xIsNext ? "X" : "O");
        else status = "The game result is a draw ";
    }

    const handleSetLen = e => {
        if(e.target.value > 0)
        {
            setLEN(e.target.value);
        }
        else{
            alert("Không được chọn giá trị âm")
        }
    }


    return (
        <div className="game">
            <div className="set">
                <label>Chọn kích thước ô đánh</label>
                <div><input type="number" value={LEN} onChange={handleSetLen}/></div>
            </div>
            <div className="game-board">
                <Board
                    squares={current.squares}
                    winnerPos={winnerPos}
                    onClick={i => handleClick(i)}
                    LEN = {LEN}
                />
            </div>
            <div className="game-info">
                <button onClick={handleClickSortBy}>{sortBy ? "Ascending" : "Descending"}</button>
                <div>{status}</div>
                <ol>{sortBy ? moves : moves.reverse()}</ol>
            </div>
        </div>
    );
}


  

export default Game;