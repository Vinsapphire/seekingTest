import React from "react";
import Row from "../../components/Row";

interface IRowProps {
  rows: number[][];
}

const Grid = (props: IRowProps) => {
  const { rows } = props;

  return (
    <div>
      {rows.map((row: number[], index: number) => (
        <Row cells={row} key={`row${index}`} rowIndex={index} />
      ))}
    </div>
  );
};

export default Grid;
