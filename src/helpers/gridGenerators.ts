const GRID_SIZE = 50;

export const _getNeighboursCount = (
  currentState: number[][],
  rowIndex: number,
  cellIndex: number
): number => {
  const getCellStatus = (cellRow: number, cellColumn: number) => {
    return currentState[cellRow] && currentState[cellRow][cellColumn];
  };

  let neighboursCount = 0;

  if (getCellStatus(rowIndex - 1, cellIndex - 1)) neighboursCount++;
  if (getCellStatus(rowIndex - 1, cellIndex)) neighboursCount++;
  if (getCellStatus(rowIndex - 1, cellIndex + 1)) neighboursCount++;
  if (getCellStatus(rowIndex, cellIndex - 1)) neighboursCount++;
  if (getCellStatus(rowIndex, cellIndex + 1)) neighboursCount++;
  if (getCellStatus(rowIndex + 1, cellIndex - 1)) neighboursCount++;
  if (getCellStatus(rowIndex + 1, cellIndex)) neighboursCount++;
  if (getCellStatus(rowIndex + 1, cellIndex + 1)) neighboursCount++;

  return neighboursCount;
};

export const _calculateNextCellState = (
  cellsCount: number,
  currentState: number
): number => {
  let status = 0;
  if (
    (cellsCount === 3 && !currentState) ||
    (!!currentState && cellsCount > 1 && cellsCount < 4)
  ) {
    status = 1;
  }

  return status;
};

export const _generateGridPlaceholder = (gridSize: number): number[][] => {
  const gridPlaceholder: number[][] = [];

  for (let i = 0; i < gridSize; i++) {
    gridPlaceholder.push([]);
  }

  return gridPlaceholder;
};

export const generateNextGridState = (currentState: number[][]): number[][] => {
  const gridSize = currentState.length;
  const nextState: number[][] = _generateGridPlaceholder(gridSize);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cellsCount = _getNeighboursCount(currentState, i, j);
      nextState[i][j] = _calculateNextCellState(cellsCount, currentState[i][j]);
    }
  }

  return nextState;
};

export const generateInitialArray = (): number[][] => {
  let cellsArray = [];

  for (let i = 0; i < GRID_SIZE; i++) {
    let row = [];

    for (let j = 0; j < GRID_SIZE; j++) {
      row.push(Math.round(Math.random()));
    }
    cellsArray.push(row);
  }

  return cellsArray;
};
