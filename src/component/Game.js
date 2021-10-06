import React, { useState } from 'react';
import { useEffect } from 'react';
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

    // useEffect(() => {
    //     console.log("histor", history);
    // }, [history])

    const calculateWinner = (squares, LEN, lastCheck) => {
      
        if(lastCheck && lastCheck.length>0)
        {
            console.log("lasf", lastCheck,squares);
            const lines = [];
            const symbol = squares[lastCheck[1]*LEN + lastCheck[0]]
            console.log("asf",symbol);
            //kiem tra dong
            let dong = {
                arr:[lastCheck[1]*LEN + lastCheck[0]],
                num: 0
            }
            for(let i = lastCheck[0] +1 ; i < LEN; i++) 
            {
                if(squares[lastCheck[1]*LEN + i]===symbol)
                {
                    dong.num = dong.num + 1;
                    dong.arr.push(lastCheck[1]*LEN + i)
                }
                else{
                    break;
                }
            }
            for(let i = lastCheck[0] -1 ; i >= 0; i--) 
            {
                if(squares[lastCheck[1]*LEN + i]===symbol)
                {
                    dong.num = dong.num + 1;
                    dong.arr.push(lastCheck[1]*LEN + i)
                }
                else{
                    break;
                }
            }
            if(dong.num>=4)
            {
                console.log("dong",dong, symbol);
                return [symbol,dong.arr]
            }

            //kiem tra cot
            let cot = {
                arr:[lastCheck[1]*LEN + lastCheck[0]],
                num: 0
            }
            for(let i = lastCheck[1] + 1 ; i < LEN; i++) 
            {
                if(squares[i*LEN + lastCheck[0]]===symbol)
                {
                    cot.num = cot.num + 1;
                    cot.arr.push(i*LEN + lastCheck[0])
                }
                else{
                    break;
                }
            }
            for(let i = lastCheck[1] -1  ; i >=0; i--) 
            {
                if(squares[i*LEN + lastCheck[0]]===symbol)
                {
                    cot.num = cot.num + 1;
                    cot.arr.push(i*LEN + lastCheck[0])
                }
                else{
                    break;
                }
            }
            if(cot.num>=4)
            {
                console.log("dong",cot, symbol);
                return [symbol,cot.arr]
            }

            //kiem tra cheo chinh
            let cheochinh = {
                arr:[lastCheck[1]*LEN + lastCheck[0]],
                num: 0
            }
            for(let i = 1  ; i < LEN ; i++) 
            {
                if(lastCheck[0]+ i > LEN -1 || lastCheck[1]+ i > LEN -1)
                {
                    break;
                }                 
                if(squares[(lastCheck[1]+ i)*LEN + lastCheck[0] + i] ===symbol)
                {
                    cheochinh.num = cheochinh.num + 1;
                    cheochinh.arr.push((lastCheck[1]+ i)*LEN + lastCheck[0] + i)
                }
                else{
                    break;
                }
            }
            for(let i = 1  ; i < LEN ; i++) 
            {
                if(lastCheck[0] - i < 0 || lastCheck[1] - i < 0)
                {
                    break;
                }                 
                if(squares[(lastCheck[1] - i)*LEN + lastCheck[0] -  i] ===symbol)
                {
                    cheochinh.num = cheochinh.num + 1;
                    cheochinh.arr.push((lastCheck[1] - i)*LEN + lastCheck[0] -  i)
                }
                else{
                    break;
                }
            }
            if(cheochinh.num>=4)
            {
                console.log("dong",cheochinh, symbol);
                return [symbol,cheochinh.arr]
            }


            //kiem tra cheo phu
            let cheophu = {
                arr:[lastCheck[1]*LEN + lastCheck[0]],
                num: 0
            }
            for(let i = 1  ; i < LEN ; i++) 
            {
                if(lastCheck[0] + i > LEN -1 || lastCheck[1] - i < 0)
                {
                    break;
                }                 
                if(squares[(lastCheck[1] - i)*LEN + lastCheck[0] +  i] ===symbol)
                {
                    cheophu.num = cheophu.num + 1;
                    cheophu.arr.push((lastCheck[1] - i)*LEN + lastCheck[0] +  i)
                }
                else{
                    break;
                }
            }
            for(let i = 1  ; i < LEN ; i++) 
            {
                if(lastCheck[0] - i < 0 || lastCheck[1] + i > LEN -1)
                {
                    break;
                }                 
                if(squares[(lastCheck[1] + i)*LEN + lastCheck[0] -  i] ===symbol)
                {
                    cheophu.num = cheophu.num + 1;
                    cheophu.arr.push((lastCheck[1] + i)*LEN + lastCheck[0] -  i)
                }
                else{
                    break;
                }
            }
            if(cheophu.num>=4)
            {
                console.log("dong",cheophu, symbol);
                return [symbol,cheophu.arr]
            }




        }
        


        // for(let i=0;i<LEN;i++)
        // {
        //   let t = [];
        //   for(let j=0;j<LEN;j++)
        //   {
        //     t.push(i*LEN+j);
        //   }
        //   lines.push(t)
        // }
      
        // for(let i=0;i<LEN;i++)
        // {
        //   let t = [];
        //   for(let j=0;j<LEN;j++)
        //   {
        //     t.push(j*LEN+i);
        //   }
        //   lines.push(t)
        // }
      
        // let t1 =[]
        // let t2 = []
        // for(let i=0;i<LEN;i++)
        // {
        //   t1.push(i*(LEN+1))
        //   t2.push((i+1)*(LEN-1))
        // }
      
        // lines.push(t1);
        // lines.push(t2);
      
        // for (let i = 0; i < lines.length; i++) {
      
        //   let flag =0;
        //   for(let j = 0;j <LEN; j++ )
        //   {
        //     if(j===0)
        //     {
        //       if (!squares[lines[i][0]]) flag=1;
        //     }
        //     else{
        //       if (squares[lines[i][0]] !== squares[lines[i][j]]) flag=1;
        //     }
        //   }
      
        //   if(flag===0){
        //     return [squares[lines[i][0]],lines[i]];
        //   }
        //   // if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            
        //   //   return [squares[a],lines[i]];
        //   // }
        // }
        return null;
      }

    const handleClick = (i) => {
        const historyTemp = history.slice(0, stepNumber + 1);
        const current = historyTemp[historyTemp.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares, LEN, current.latestCheck) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setHistory(historyTemp.concat([
            {
                squares: squares,
                latestCheck: [i % LEN, Math.floor(i / LEN)]
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
    const winner = calculateWinner(current.squares, LEN, current.latestCheck);


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
        if(e.target.value >=5)
        {
            setLEN(e.target.value);
        }
        else{
            alert("size should not be less than 5 value")
        }
    }

    const handlePlayAgain = () => {
        setStepNumber(0)
        setWinnerPos([]);
        setHistory([
            {
                squares: Array(LEN * LEN).fill(null),
                latestCheck: []
    
            }
        ])
    }




    return (
        <div className="game">
            <div className="menu">
                <button className="button-play-again" onClick={handlePlayAgain}>Play again</button>
                { history.length ===1 ? <div className="set">
                    <label>Set size of the board</label>
                    <div><input type="number" value={LEN} onChange={handleSetLen}/></div>
                </div>
                :
                <div>
                     <label>Size of the board</label>
                    <div><input type="number" value={LEN} onChange={handleSetLen} readOnly/></div>
                </div>
                }
               
            </div>
            <div className="game-board">
            <div className="status-game">{status}</div>
                <Board
                    squares={current.squares}
                    winnerPos={winnerPos}
                    onClick={i => handleClick(i)}
                    LEN = {LEN}
                />
            </div>
            <div className="game-info">
                <button onClick={handleClickSortBy}>{sortBy ? "Ascending" : "Descending"}</button>
                <ol>{sortBy ? moves : moves.reverse()}</ol>
            </div>
        </div>
    );
}


  

export default Game;