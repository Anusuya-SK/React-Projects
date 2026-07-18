import { useState } from "react";

function Greetings() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }, 1000);

  return (
    <div className="container">
      <h1>Greetings Section</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default Greetings;
