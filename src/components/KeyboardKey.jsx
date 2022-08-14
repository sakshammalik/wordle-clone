const KeyboardKey = ({ item, onClick, error }) => {
    return (
      <button
        className={`${
          item.code === 13 || item.code === 8 ? "w-100" : ""
        } keyboard-key ${error}`}
        onClick={() => onClick(item.name)}
      >
        {item.render}
      </button>
    );
};

export default KeyboardKey;