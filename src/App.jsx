import { useState } from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [bars, setBars] = useState([]);

  const handleAdd = () => {
    setBars((prev) => [...prev, { id: `bar-${prev.length + 1}` }]);
  };
  return (
    <section className="progress__bar--root-container">
      <h1 className="progress__bar--title">Progress Bar</h1>
      <button onClick={() => handleAdd()} className="progress__bar--add">
        Add
      </button>
      <section className="progress__bar--bars-container">
        {bars.map((item) => (
          <ProgressBar key={item.id} />
        ))}
      </section>
    </section>
  );
};

export default App;
