import React from "react";
import { ALLOWED_KEYS, LETTER_STATES } from "../constants";
import Header from "./Header";
import Keyboard from "./Keyboard";
import SquareGrid from "./SquareGrid";

const MainLayout = () => {
    const [solution, setSolution] = React.useState('');
    const [wordList, setWordList] = React.useState([]);
    const [grid, setGrid] = React.useState({
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    });
    const [error, setError] = React.useState({
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    });
    const [numberOfTry, setNumberOfTry] = React.useState(1);
    const [isWon, setIsWon] = React.useState(false);
    const [keyboardErrorState, setKeyboardErrorState] = React.useState({});

    const getWordsList = async () => {
        const resp = await fetch(
          "https://raw.githubusercontent.com/charlesreid1/five-letter-words/master/sgb-words.txt"
        );
        const data = await resp.text();
        const arr = data.split('\n');
        const sol = localStorage.getItem("solution");
        if (sol) {
            setSolution(sol);
        } else {
            const randomWord = arr[Math.floor(Math.random() * arr.length)];
            setSolution(randomWord)
            localStorage.setItem('solution', randomWord);
        }
        setWordList(arr);
    };


    React.useEffect(() => {
        getWordsList();
    }, []);

    const checkWord = React.useCallback((wordArr) => {
        const word = wordArr.join('');
        const solArr = solution.split('');
        if (wordList.includes(word)) {
            console.log('awesome working');
            const tempErr = { ...error };
            const tempVal = tempErr[numberOfTry];
            const keyboardError = { ...keyboardErrorState };
            for (let i=0; i<5; i++) {
                if (wordArr[i] === solution[i]) {
                    tempVal[i] = LETTER_STATES.correct;
                    keyboardError[wordArr[i]] = LETTER_STATES.correct;
                } else if (solArr.includes(wordArr[i])) {
                    tempVal[i] = LETTER_STATES.present;
                    keyboardError[wordArr[i]] = LETTER_STATES.present;
                } else {
                    tempVal[i] = LETTER_STATES.absent;
                    keyboardError[wordArr[i]] = LETTER_STATES.absent;
                }
            }
            if (solution === word) {
                setIsWon(true);
            }
            tempErr[numberOfTry] = tempVal;
            setError(tempErr);
            setNumberOfTry(numberOfTry + 1)
            setKeyboardErrorState(keyboardError);
            return;
        }
        console.log('not a word bro')
        
    }, [error, keyboardErrorState, numberOfTry, solution, wordList]);

    const onClick = React.useCallback((itemPressed) => {
        const item = itemPressed.toLowerCase();
        if (!ALLOWED_KEYS.includes(item) || isWon) {
            return;
        }
        const temp = { ...grid };
        const value = [...temp[numberOfTry]];
        if (item === "enter" && value.length < 5) {
            // handle error
            return;
        }
        if (item === "enter" && value.length > 4) {
            checkWord(value);
            return;
        }
        if (item === "backspace") {
            if (value.length > 0 && value.length <= 5) {
                value.pop();   
            } else {
                return;
            }
        }
        
        if (value.length > 4) {
          return;
        }
        if (item !== "backspace") {
          value.push(item);
        }
        temp[numberOfTry] = value;
        setGrid(temp);
    }, [checkWord, grid, isWon, numberOfTry]);

    const handleClickEvent = React.useCallback(
      (e) => {
        onClick(e.key);
      },
      [onClick]
    );

    React.useEffect(() => {
      document.body.addEventListener("keydown", handleClickEvent);
      if (isWon) {
        document.body.removeEventListener("keydown", handleClickEvent);  
      }
      return () => {
        document.body.removeEventListener("keydown", handleClickEvent);
      };
    }, [handleClickEvent, isWon]);

    return (
      <div className="main">
        <div className="container">
          <Header />
          <SquareGrid grid={grid} error={error} />
          <Keyboard
            onClick={onClick}
            grid={grid}
            error={keyboardErrorState}
          />
        </div>
      </div>
    );
};

export default MainLayout;