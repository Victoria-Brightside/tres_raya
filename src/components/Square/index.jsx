import "./Square.css"

function Square({ index, children, updateBoard }) {
    const handleClick = () => {
        updateBoard(index)
    }

    return (

        <div onClick={handleClick} className="square"> {children} </div>
    )
}

export default Square;