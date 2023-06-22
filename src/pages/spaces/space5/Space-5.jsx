import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './Space5.css';

const Space5 = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const [gameMode, setGameMode] = useState('machine');
  const [darkMode, setDarkMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (gameMode === 'machine' && turn === 'O' && !winner) {
      setTimeout(makeAIMove, 500);
    }
  }, [turn, winner, gameMode]);

  useEffect(() => {
    if (winner && (gameMode === 'twoPlayers' || (gameMode === 'machine' && winner === 'X'))) {
      setShowConfetti(true);
    }
  }, [winner, gameMode]);

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
    const bestMove = findBestMove(board);
    handleClick(bestMove);
  };

  const findBestMove = (board) => {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = 'O';
        const score = minimax(board, 0, false);
        board[i] = null;

        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    return bestMove;
  };

  const minimax = (board, depth, isMaximizing) => {
    const scores = {
      X: -1,
      O: 1,
      draw: 0,
    };

    const result = checkWinner(board);

    if (result) {
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = 'O';
          const score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = 'X';
          const score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
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
    setShowConfetti(false);
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
    resetGame();
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const getThemeClass = () => {
    return darkMode ? 'dark' : 'light';
  };

  return (
    <div className={`space5 card ${getThemeClass()}`}>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight + 600}
          recycle={false}
          numberOfPieces={600}
          gravity={0.1}
        />
      )}
      <h1>Tic Tac Toe</h1>
      <h2>Play Alone or Against</h2>
      <div className="game-mode">
        <button
          className={gameMode === 'machine' ? 'active' : ''}
          onClick={() => handleGameModeChange('machine')}
        >
          Against Robot
        </button>
        <button
          className={gameMode === 'twoPlayers' ? 'active' : ''}
          onClick={() => handleGameModeChange('twoPlayers')}
        >
          2 Players
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
        <div className="winner">
          {winner === 'draw' ? (
            <h2>It is a draw!</h2>
          ) : (
            <h2>{winner} wins! CONGRATS!</h2>
          )}
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
      <div className="theme-toggle">
        <span>Toggle Theme: </span>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={handleThemeChange} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Space5;















// Con dificultad ajustable con robotDifficulty
// import { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';
// import './Space5.css';

// const Space5 = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [turn, setTurn] = useState('X');
//   const [winner, setWinner] = useState(null);
//   const [gameMode, setGameMode] = useState('solo');
//   const [darkMode, setDarkMode] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [robotDifficulty, setRobotDifficulty] = useState(10);

//   useEffect(() => {
//     if (gameMode === 'machine' && turn === 'O' && !winner) {
//       setTimeout(makeAIMove, 500);
//     }
//   }, [turn, winner, gameMode]);

//   useEffect(() => {
//     if (gameMode === 'twoPlayers' && winner) {
//       setShowConfetti(true);
//     }
//   }, [winner, gameMode]);

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

//   const makeAIMove = () => {
//     if (Math.random() < 1 / robotDifficulty) {
//       const availableMoves = getAvailableMoves(board);
//       const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
//       handleClick(randomMove);
//     } else {
//       const bestMove = findBestMove(board);
//       handleClick(bestMove);
//     }
//   };

//   const findBestMove = (board) => {
//     let bestScore = -Infinity;
//     let bestMove = null;

//     for (let i = 0; i < board.length; i++) {
//       if (!board[i]) {
//         board[i] = 'O';
//         const score = minimax(board, 0, false);
//         board[i] = null;

//         if (score > bestScore) {
//           bestScore = score;
//           bestMove = i;
//         }
//       }
//     }

//     return bestMove;
//   };

//   const minimax = (board, depth, isMaximizing) => {
//     const scores = {
//       X: -1,
//       O: 1,
//       draw: 0,
//     };

//     const result = checkWinner(board);

//     if (result) {
//       return scores[result];
//     }

//     if (isMaximizing) {
//       let bestScore = -Infinity;
//       for (let i = 0; i < board.length; i++) {
//         if (!board[i]) {
//           board[i] = 'O';
//           const score = minimax(board, depth + 1, false);
//           board[i] = null;
//           bestScore = Math.max(score, bestScore);
//         }
//       }
//       return bestScore;
//     } else {
//       let bestScore = Infinity;
//       for (let i = 0; i < board.length; i++) {
//         if (!board[i]) {
//           board[i] = 'X';
//           const score = minimax(board, depth + 1, true);
//           board[i] = null;
//           bestScore = Math.min(score, bestScore);
//         }
//       }
//       return bestScore;
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

//     if (!board.includes(null)) {
//       return 'draw';
//     }

//     return null;
//   };

//   const getAvailableMoves = (board) => {
//     return board.reduce((moves, value, index) => {
//       if (!value) {
//         moves.push(index);
//       }
//       return moves;
//     }, []);
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setTurn('X');
//     setWinner(null);
//     setShowConfetti(false);
//   };

//   const handleGameModeChange = (mode) => {
//     setGameMode(mode);
//     resetGame();
//   };

//   const handleThemeChange = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleRobotDifficultyChange = (value) => {
//     setRobotDifficulty(value);
//   };

//   const getThemeClass = () => {
//     return darkMode ? 'dark' : 'light';
//   };

//   return (
//     <div className={`space5 card ${getThemeClass()}`}>
//       {showConfetti && (
//         <Confetti
//           width={window.innerWidth}
//           height={window.innerHeight + 600}
//           recycle={false}
//           numberOfPieces={600}
//           gravity={0.1}
//         />
//       )}
//       <h1>Tic Tac Toe</h1>
//       <h2>Play Alone or Against</h2>
//       <div className="game-mode">
//         <button
//           className={gameMode === 'solo' ? 'active' : ''}
//           onClick={() => handleGameModeChange('solo')}
//         >
//           Play Alone
//         </button>
//         <button
//           className={gameMode === 'machine' ? 'active' : ''}
//           onClick={() => handleGameModeChange('machine')}
//         >
//           Against Robot
//         </button>
//         <button
//           className={gameMode === 'twoPlayers' ? 'active' : ''}
//           onClick={() => handleGameModeChange('twoPlayers')}
//         >
//           Against Other
//         </button>
//       </div>
//       {gameMode === 'machine' && (
//         <div className="robot-difficulty">
//           <span>Robot Difficulty: </span>
//           <input
//             type="range"
//             min="1"
//             max="10"
//             value={robotDifficulty}
//             onChange={(e) => handleRobotDifficultyChange(e.target.value)}
//           />
//         </div>
//       )}
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
//         <div className="winner">
//           {winner === 'draw' ? (
//             <h2>It is a draw!</h2>
//           ) : (
//             <h2>{winner} wins! CONGRATS!</h2>
//           )}
//           <button onClick={resetGame}>Restart Game</button>
//         </div>
//       )}
//       <div className="theme-toggle">
//         <span>Toggle Theme: </span>
//         <label className="switch">
//           <input
//             type="checkbox"
//             checked={darkMode}
//             onChange={handleThemeChange}
//           />
//           <span className="slider round"></span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Space5;


















// Tic Tac Toe simple y arriba mucho mas avanzado
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


 
