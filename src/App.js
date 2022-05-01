import { useState } from "react";
import "./App.scss";
import Counter from "./component/Counter";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  const [counter, setCounter] = useState([0]);

  // console.log(newCounter);
  return (
    <div className="App">
      <Header title="React Conter V3" />
      <div className="add-counter">
        <button
          onClick={() => {
            const newCounter = [...counter];
            newCounter.push(0);
            setCounter(newCounter);
          }}
        >
          Add-Counter
        </button>
      </div>
      {counter.map((item, index) => {
        console.log(index);
        return (
          <Counter
            key={index}
            index={index}
            item={item}
            setCounter={setCounter}
            counter={counter}
          />
        );
      })}

      <Footer title="Made with React by Doud " />
    </div>
  );
}

export default App;
