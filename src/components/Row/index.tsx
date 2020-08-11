import React from "react";
import "./row.css";
import Cell from "../Cell";

interface IRowProps {
  cells: number[];
  rowIndex: number;
}

const Row = (props: IRowProps) => {
  const { cells, rowIndex } = props;

  return (
    <div className="row">
      {cells.map((cell: number, index: number) => (
        <Cell key={`cell-${rowIndex}-${index}`} isAlive={!!cell} />
      ))}
    </div>
  );
};

export default Row;
