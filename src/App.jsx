import Square from './components/Square';
import './App.css';
import { useState } from 'react';

function App() {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState('X');

  const updateBoard = (index) => {
    if (board[index]) return; // Evita sobreescribir una celda

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar turno
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  return (
    <>
      <div className="game">
        {board.map((value, index) => (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {value}
          </Square>
        ))}
      </div>
    </>
  );
}

export default App;
