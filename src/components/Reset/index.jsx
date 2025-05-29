import "./Reset.css"

function Reset ({resetGame}) {
    return (
        <button className='reset-btn' onClick={resetGame}>Reiniciar juego</button>
    )
}

export default Reset;