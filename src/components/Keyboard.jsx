import React from "react";
import KeyboardKey from "./KeyboardKey";

const Keyboard = ({ onClick, grid, error }) => {

  const FIRST_ROW = [
    {
      name: "q",
      render: "Q",
      code: 81,
    },
    {
      name: "w",
      render: "W",
      code: 87,
    },
    {
      name: "e",
      render: "E",
      code: 69,
    },
    {
      name: "r",
      render: "R",
      code: 82,
    },
    {
      name: "t",
      render: "T",
      code: 84,
    },
    {
      name: "y",
      render: "Y",
      code: 89,
    },
    {
      name: "u",
      render: "U",
      code: 85,
    },
    {
      name: "i",
      render: "I",
      code: 73,
    },
    {
      name: "o",
      render: "O",
      code: 79,
    },
    {
      name: "p",
      render: "P",
      code: 80,
    },
  ];

  const SECOND_ROW = [
    {
      name: "a",
      render: "A",
      code: 65,
    },
    {
      name: "s",
      render: "S",
      code: 83,
    },
    {
      name: "d",
      render: "D",
      code: 68,
    },
    {
      name: "f",
      render: "F",
      code: 70,
    },
    {
      name: "g",
      render: "G",
      code: 71,
    },
    {
      name: "h",
      render: "H",
      code: 72,
    },
    {
      name: "j",
      render: "J",
      code: 74,
    },
    {
      name: "k",
      render: "K",
      code: 75,
    },
    {
      name: "l",
      render: "L",
      code: 76,
    },
  ];
  const THIRD_ROW = [
    {
      name: "enter",
      render: "ENTER",
      code: 13,
    },
    {
      name: "z",
      render: "Z",
      code: 90,
    },
    {
      name: "x",
      render: "X",
      code: 88,
    },
    {
      name: "c",
      render: "C",
      code: 67,
    },
    {
      name: "v",
      render: "V",
      code: 86,
    },
    {
      name: "b",
      render: "B",
      code: 66,
    },
    {
      name: "n",
      render: "N",
      code: 78,
    },
    {
      name: "m",
      render: "M",
      code: 77,
    },
    {
      name: "backspace",
      render: <img src="/wordle-clone/images/backspace.svg" alt="backspace" />,
      code: 8,
    },
  ];

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {FIRST_ROW.map((key) => (
          <KeyboardKey
            item={key}
            key={key.code}
            onClick={onClick}
            error={error[key.name]}
          />
        ))}
      </div>
      <div className="keyboard-row">
        <div className="spacer"></div>
        {SECOND_ROW.map((key) => (
          <KeyboardKey
            item={key}
            key={key.code}
            onClick={onClick}
            error={error[key.name]}
          />
        ))}
        <div className="spacer"></div>
      </div>
      <div className="keyboard-row">
        {THIRD_ROW.map((key) => (
          <KeyboardKey
            item={key}
            key={key.code}
            onClick={onClick}
            error={error[key.name]}
          />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;