import React, { useEffect, useState } from "react";

const TicTacToeM = () => {
  const initialBoard = () => Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard());
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    getResult();
  }, [board]);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const getResult = () => {
    const winner = calculateWinner(board);
    if (winner) {
      alert(`${winner} wins the match`);
      setBoard(initialBoard);
      setIsActive(true);
    }
    if (!board.includes === null) {
      alert("match drawn");
      setBoard(initialBoard);
      setIsActive(true);
    }
  };

  const handelClick = (index) => {
    const winner = calculateWinner(board);
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isActive ? "X" : "O";
    setIsActive(!isActive);
    setBoard(newBoard);
  };

  return (
    <div className="flex gap-4 justify-center items-center flex-col mt-10 p-5">
      <h1>Tic Tac Toe</h1>
      <div className="grid-cols-3 grid justify-center items-center w-[300px] text-center">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              className="w-[100px] h-[100px] text-[36px] p-5 cursor-pointer border-2 border-solid border-gray-300"
              onClick={() => handelClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToeM;
