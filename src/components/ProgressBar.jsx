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

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="progress__bar--bar-backdrop">
      <div
        className="progress__bar--fill"
        // style={{width: `${progress}`}}
        style={{ transform: `translateX(${progress}%)` }} //used transform since its more performance oriented. using width will make browser to repaint the css again & again
      ></div>
    </section>
  );
};

export default ProgressBar;
