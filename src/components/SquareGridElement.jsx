import React from "react";

const SquareGridElement = ({ element, error }) => {

    return (
      <div style={{ transformOrigin: "100% center", position: "relative" }}>
        <div className={`square-grid-element ${element ? 'active' : ''} ${error ? error : ''}`}>{element}</div>
        {/* <div className={classes + ' error'}>{element}</div> */}
      </div>
    );
};

export default SquareGridElement;