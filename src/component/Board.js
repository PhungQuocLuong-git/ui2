import React from 'react';
import './index.css';
import Square from './Square';

function Board({LEN, winnerPos, squares, onClick}) {
    const renderSquare = (i) => {
        console.log(i);
        return (
            <Square
                key={i}
                k={i}
                winnerPos={winnerPos}
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        );
    }

    const temp = [];
    for (let i = 0; i < LEN; i++) {
        temp.push(i);
    }


    return (
        <div>
            {
                temp.map(i =>
                (
                    <div key={i + "abc"} className="board-row">
                        {
                            temp.map(j => renderSquare(LEN * i + j))
                        }
                    </div>
                )
                )
            }
        </div>
    );
}

export default Board;