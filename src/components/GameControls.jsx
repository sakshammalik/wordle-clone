import { GAME_STATUS } from "../constants";

const GameControls = ({ isWon, status, retry, newGame }) => {
  const renderControls = () => {
    if (isWon && status === GAME_STATUS.completed) {
      return (
        <div className="game-controls">
          <h1>You are a PRO!</h1>
          <button onClick={newGame}>New Game</button>
        </div>
      );
    }
    if (!isWon && status === GAME_STATUS.completed) {
      return (
        <div className="game-controls">
          <h1>Need a dictionary?</h1>
          <button onClick={retry}>Retry</button>
        </div>
      );
    }
    return <></>;
  };

  return <>{renderControls()}</>;
};

export default GameControls;
