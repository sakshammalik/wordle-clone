const KeyboardKey = ({ item, onClick, error }) => {
    return (
        <button className={`keyboard-key ${error} ${item.code === 13 || item.code === 8 ? 'w-100' : ''}`} onClick={() => onClick(item.name)}>{item.render}</button>
    );
};

export default KeyboardKey;