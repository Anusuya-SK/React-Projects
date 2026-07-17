import { useState } from "react";

function DigitalClock() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  const update = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  setInterval(() => {
    update();
  }, 1000);

  return (
    <div className="container">
      <h1 className="title">Digital Clock</h1>
      <p>{time}</p>
    </div>
  );
}

export default DigitalClock;
