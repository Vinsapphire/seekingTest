import {
  generateNextGridState,
  _generateGridPlaceholder,
  _calculateNextCellState,
  _getNeighboursCount,
} from "./gridGenerators";

const prevState = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
const nextState = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

test("Should generate the next state of the grid based on the previous state", () => {
  expect(generateNextGridState(prevState)).toEqual(nextState);
});

test("Should generate an empty grid of provided size", () => {
  const gridSize = 5;
  const grid = _generateGridPlaceholder(gridSize);
  expect(grid.length).toEqual(gridSize);
});

test("Should calculate the next cell state based on the amount of neighbors", () => {
  //one alive cell around and the target is alive
  //should return 0 - underpopulation
  let nextState = _calculateNextCellState(1, 1);
  expect(nextState).toEqual(0);

  //two alive cells around but the target is dead
  //should return 0 - underpopulation
  nextState = _calculateNextCellState(1, 0);
  expect(nextState).toEqual(0);

  //two alive cells around and the target is alive
  //should return 1 - cell lives on
  nextState = _calculateNextCellState(2, 1);
  expect(nextState).toEqual(1);

  //two alive cells around but the target is dead
  //should return 0 - underpopulation
  nextState = _calculateNextCellState(2, 0);
  expect(nextState).toEqual(0);

  //three alive cells around and the target is alive
  //should return 1 - cell lives on
  nextState = _calculateNextCellState(3, 1);
  expect(nextState).toEqual(1);

  //three alive cells around but the target is dead
  //should return 1 - cell reborn
  nextState = _calculateNextCellState(3, 0);
  expect(nextState).toEqual(1);

  //four alive cells around and the target is alive
  //should return 0 as the environment is overpopulated
  nextState = _calculateNextCellState(4, 1);
  expect(nextState).toEqual(0);

  //four alive cells around but the target is dead
  //should return 0 as the environment is overpopulated
  nextState = _calculateNextCellState(4, 0);
  expect(nextState).toEqual(0);
});

test("Should calculate an amount of alive neighboring cells", () => {
  const expectedCount = 4;
  const neighborsCount = _getNeighboursCount(prevState, 3, 2);
  expect(neighborsCount).toEqual(expectedCount);
});
