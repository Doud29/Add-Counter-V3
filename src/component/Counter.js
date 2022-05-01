const Counter = ({ item, counter, index, setCounter }) => {
  return (
    <div className="Counter">
      <div className="bloc-counter">
        <button
          onClick={() => {
            const newTab = [...counter];
            newTab[index] += 1;
            return setCounter(newTab);
          }}
        >
          +
        </button>
        <button>{item}</button>
        <button
          onClick={() => {
            const newTab = [...counter];
            newTab[index] -= 1;
            return setCounter(newTab);
          }}
        >
          -
        </button>
      </div>

      <div className="reset">
        <button
          onClick={() => {
            const newTab = [...counter];
            newTab[index] = 0;
            return setCounter(newTab);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
