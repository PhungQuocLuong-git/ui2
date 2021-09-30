import React from 'react';
import './index.css';

function Square({winnerPos, onClick, k, value}) {
    const winpos = winnerPos
    return (
        <button onClick={onClick} className={winpos.indexOf(k) !== -1 ? "square win" : "square"}>
            {value}
        </button>
    );
}

export default Square;