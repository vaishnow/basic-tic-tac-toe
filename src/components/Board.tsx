import { useState } from "react";
import Square from "./Square";
import { RxCircle, RxCross1 } from "react-icons/rx";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [p1Turn, setP1Turn] = useState(true);

  const handleClick = (i: number): void => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    if (p1Turn) {
      nextSquares[i] = "x";
    } else {
      nextSquares[i] = "o";
    }
    setSquares(nextSquares);
    setP1Turn(!p1Turn);
  };

  const checkWinner = (squares: String[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [l1, l2, l3] = line;
      if (
        squares[l1] &&
        squares[l1] === squares[l2] &&
        squares[l1] === squares[l3]
      )
        return squares[l1];
    }
    return null;
  };

  let winner = checkWinner(squares);
  let status;
  if (winner) {
    status = (
      <>
        Player {!p1Turn ? 1 : 2} (
        {winner === "x" ? (
          <RxCross1 className="inline-block" color="red" />
        ) : (
          <RxCircle className="inline-block" color="blue" />
        )}
        ) won
      </>
    );
  } else {
    status = (
      <>
        Player {p1Turn ? 1 : 2}(
        {p1Turn ? (
          <RxCross1 className="inline-block" color="red" />
        ) : (
          <RxCircle className="inline-block" color="blue" />
        )}
        ) turn
      </>
    );
  }

  return (
    <>
      <h1 className="text-center mb-20 text-5xl">Tic-Tac-Toe</h1>
      <div className="text-bold text-2xl text-center my-2">{status}</div>
      <div className="grid grid-cols-3 gap-1 w-fit mx-auto bg-neutral-950 mix-blend-color-burn">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
        <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
        <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </>
  );
};

export default Board;
