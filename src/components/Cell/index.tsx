import React from "react";
import "./cell.css";

export interface ICellProps {
  isAlive: boolean;
}

const Cell = (props: ICellProps) => {
  const { isAlive } = props;

  return <div className={`cell ${isAlive ? `alive` : ``}`}></div>;
};

export default Cell;
