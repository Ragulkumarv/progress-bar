import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  }, []);
  return (
    <section className="progress-bar">
      <div
        className="progress-fill"
        style={{ transform: `translateX(${progress}%)` }}
      ></div>
    </section>
  );
};

export default ProgressBar;
