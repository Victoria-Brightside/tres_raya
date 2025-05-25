function Reset({setTurn, setBoard, initialBoard}) {
    const handleClick = () => {
        setBoard(Array(9).fill(null));
        setTurn('X');
    }
    return (
        <button onClick={handleClick}> Reiniciar juego </button>
    )

}

export default Reset;