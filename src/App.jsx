import Square from './components/Square';
import './App.css';
import Reset from './components/Reset';
import { useState } from 'react';
import { checkWinnerFrom, checkEndGame, WinnerModal } from './components/WinnerModal'
import confetti from 'canvas-confetti';

function App() {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index]) return; // Evita sobreescribir una celda

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar turno
    setTurn(turn === 'X' ? 'O' : 'X');

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setWinner(null);
  };

  return (
    <>
      <h1 className='title'>Juego del gato - Tres en raya - Tic Tac Toe</h1>

      <div className="container">
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



          <WinnerModal
            winner={winner}
            resetGame={resetGame}
          />
        </div>
        <Reset resetGame={resetGame}></Reset>
      </div>
    </>);
}

export default App;
