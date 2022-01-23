import React from "react";
import SquareGridElement from "./SquareGridElement";

const GRID = [

]; 


const SquareGrid = () => {

    const [grid, setGrid] = React.useState();

    return (
      <div className="grid-container">
        <div className="square-grid">
          {[0, 1, 2, 3, 4, 5].map(() => (
            <div className="square-grid-row">
              {[0, 1, 2, 3, 4].map(() => (
                <SquareGridElement />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
};

export default SquareGrid;