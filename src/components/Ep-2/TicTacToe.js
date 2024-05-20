import useTicTacToe from "../../utils/useTicTacToe";

const TicTacToe = () => {
  const { board, handelClick, getStatus, resetGame } =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatus()}
        <button className="reset-button" onClick={resetGame}>
          ResetGame
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              onClick={() => handelClick(index)}
              disabled={b !== null}
              key={index}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
