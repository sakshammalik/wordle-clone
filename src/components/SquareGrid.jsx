import React from "react";
import SquareGridElement from "./SquareGridElement";

const SquareGrid = ({ grid, error, invalidWord, numberOfTry }) => {
  return (
    <div className="grid-container">
      <div className="square-grid">
        {Object.keys(grid).map((i) => (
          <div
            className={`square-grid-row ${
              (numberOfTry === +i && invalidWord) ? "invalid" : ""
            }`}
            key={i + "grid"}
          >
            {[0, 1, 2, 3, 4].map((j, index) => (
              <SquareGridElement
                key={j + "key"}
                element={grid[i][j]}
                error={error[i][j]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SquareGrid;