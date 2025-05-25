import Square from './components/Square';
import './App.css'

function App() {

  const board = Array(9).fill(null);

  return (
    <>
      <div className="game">
        {board.map((value, index) => {
          return (
            <Square
              key={index}
              index={index}>
              {value}
            </Square>
          )
        })}
      </div>
    </>
  )
}

export default App
