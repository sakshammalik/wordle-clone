import React from "react";
import KeyboardKey from "./KeyboardKey";

const Keyboard = () => {

    React.useEffect(() => {
        window.addEventListener('keydown', (e) => {
            console.log(e.keyCode)
        })
    }, []);

    const FIRST_ROW = [
        {
            name: 'Q',
            code: 81
        },
        {
            name: 'W',
            code: 87
        },
        {
            name: 'E',
            code: 69
        },
        {
            name: 'R',
            code: 82
        },
        {
            name: 'T',
            code: 84
        },
        {
            name: 'Y',
            code: 89
        },
        {
            name: 'U',
            code: 85
        },
        {
            name: 'I',
            code: 73
        },
        {
            name: 'O',
            code: 79
        },
        {
            name: 'P',
            code: 80
        },
    ];

    const SECOND_ROW = [
      {
        name: "A",
        code: 65,
      },
      {
        name: "S",
        code: 83,
      },
      {
        name: "D",
        code: 68,
      },
      {
        name: "F",
        code: 70,
      },
      {
        name: "G",
        code: 71,
      },
      {
        name: "H",
        code: 72,
      },
      {
        name: "J",
        code: 74,
      },
      {
        name: "K",
        code: 75,
      },
      {
        name: "L",
        code: 76,
      },
    ];
    const THIRD_ROW = [
      {
        name: "ENTER",
        code: 13,
      },
      {
        name: "Z",
        code: 90,
      },
      {
        name: "X",
        code: 88,
      },
      {
        name: "C",
        code: 67,
      },
      {
        name: "V",
        code: 86,
      },
      {
        name: "B",
        code: 66,
      },
      {
        name: "N",
        code: 78,
      },
      {
        name: "M",
        code: 77,
      },
      {
        name: <img src="/backspace.svg" alt="backspace" />,
        code: 8,
      },
    ];

    return (
      <div className="keyboard">
        <div className="keyboard-row">
          {FIRST_ROW.map((key) => (
            <KeyboardKey item={key} key={key.code} />
          ))}
        </div>
        <div className="keyboard-row">
          {SECOND_ROW.map((key) => (
            <KeyboardKey item={key} key={key.code} />
          ))}
        </div>
        <div className="keyboard-row">
          {THIRD_ROW.map((key) => (
            <KeyboardKey item={key} key={key.code} />
          ))}
        </div>
      </div>
    );
};

export default Keyboard;