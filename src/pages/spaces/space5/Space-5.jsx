import { useState, useEffect } from 'react';
import './Space5.css';

const Space5 = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const [gameMode, setGameMode] = useState('solo');

  useEffect(() => {
    if (gameMode === 'machine' && turn === 'O' && !winner) {
      setTimeout(makeAIMove, 500);
    }
  }, [turn, winner, gameMode]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === 'X' ? 'O' : 'X';
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  };

  const makeAIMove = () => {
    const emptySquares = board.reduce((acc, value, index) => {
      if (!value) {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const selectedSquare = emptySquares[randomIndex];

    handleClick(selectedSquare);
  };

  const checkWinner = (board) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (!board.includes(null)) {
      return 'draw';
    }

    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setWinner(null);
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    resetGame();
  };

  return (
    <div className="space5 card">
      <h1>Tic Tac Toe</h1>
      <div className="game-mode">
        <button
          className={gameMode === 'solo' ? 'active' : ''}
          onClick={() => handleGameModeChange('solo')}
        >
          Play Alone
        </button>
        <button
          className={gameMode === 'machine' ? 'active' : ''}
          onClick={() => handleGameModeChange('machine')}
        >
          Against Machine
        </button>
        <button
          className={gameMode === 'twoPlayers' ? 'active' : ''}
          onClick={() => handleGameModeChange('twoPlayers')}
        >
          Against Other
        </button>
      </div>
      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            className={`square ${value}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {winner && (
        <div>
          {winner === 'draw' ? (
            <h2>It is a draw!</h2>
          ) : (
            <h2>{winner} wins!</h2>
          )}
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default Space5;












// Tic Tac Toe simple y arriba mucho mas avanzado y con Use State
// import React, { useState } from 'react';
// import './Space5.css';

// const Space5 = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [turn, setTurn] = useState('X');
//   const [winner, setWinner] = useState(null);

//   const handleClick = (index) => {
//     if (board[index] || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = turn;
//     setBoard(newBoard);

//     const newTurn = turn === 'X' ? 'O' : 'X';
//     setTurn(newTurn);

//     const newWinner = checkWinner(newBoard);
//     if (newWinner) {
//       setWinner(newWinner);
//     }
//   };

//   const checkWinner = (board) => {
//     const winningCombos = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (const combo of winningCombos) {
//       const [a, b, c] = combo;
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         return board[a];
//       }
//     }

//     return null;
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setTurn('X');
//     setWinner(null);
//   };

//   return (
//     <div className="space5">
//       <h1>Tic Tac Toe</h1>
//       <h2>Enjoy a classic and invite yourself.</h2>
//       <div className="board">
//         {board.map((value, index) => (
//           <div
//             key={index}
//             className={`square ${value}`}
//             onClick={() => handleClick(index)}
//           >
//             {value}
//           </div>
//         ))}
//       </div>
//       {winner && (
//         <div>
//           <h2>{winner} wins!</h2>
//           <button onClick={resetGame}>Reset Game</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Space5;


 
