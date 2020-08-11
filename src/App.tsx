import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "./containers/Grid";
import {
  generateNextGridState,
  generateInitialArray,
} from "./helpers/gridGenerators";

const App = () => {
  const [grid, setGrid] = useState(generateInitialArray());

  useEffect(() => {
    setTimeout(() => {
      setGrid(generateNextGridState(grid));
    }, 500);
  }, [grid]);

  return <Grid rows={grid} />;
};

export default App;
