import { useState } from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [bars, setBars] = useState([]);

  const handleAdd = () => {
    setBars((prev) => [...prev, { id: `bar-${prev.length + 1}` }]);
  };
  return (
    <section className="container">
      <h1>Progress Bar</h1>
      <button className="add-btn" onClick={() => handleAdd()}>
        Add
      </button>
      <div className="bars-container">
        {bars.map((item) => (
          <ProgressBar key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default App;
