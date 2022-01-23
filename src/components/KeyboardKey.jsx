const KeyboardKey = ({ item }) => {
    return (
        <button className={`keyboard-key ${item.code === 13 || item.code === 8 ? 'w-100' : ''}`}>{item.name}</button>
    );
};

export default KeyboardKey;