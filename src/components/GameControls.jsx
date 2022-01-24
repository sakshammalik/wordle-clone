import { GAME_STATUS } from "../constants";

const GameControls = ({ isWon, status, retry, newGame }) => {
  const renderControls = () => {
    if (isWon && status === GAME_STATUS.completed) {
      return (
        <>
          <h1>You are a PRO!</h1>
          <button onClick={newGame}>New Game</button>
        </>
      );
    }
    if (!isWon && status === GAME_STATUS.completed) {
      return (
        <>
          <h1>Need a dictionary?</h1>
          <button onClick={retry}>Retry</button>
        </>
      );
    }
    return <></>;
  };

  return <div className="game-controls">{renderControls()}</div>;
};

export default GameControls;
