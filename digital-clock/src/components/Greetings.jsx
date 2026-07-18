import { useState } from "react";

function Greetings() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  setInterval(() => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTime(currentTime);
  }, 1000);

  const hours = date.getHours();
  let msg;
  let image;

  if (hours >= 5 && hours < 12) {
    msg = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    msg = "Good Afternoon";
  } else if (hours >= 18 && hours < 22) {
    msg = "Good Evening";
  } else if (hours >= 22 && hours < 23) {
    msg = "Good Night";
  } else {
    msg = "Good Night";
  }

  return (
    <div className="container">
      <h1>Greetings Section</h1>
      <h2>{time}</h2>
      <p>{msg}</p>
    </div>
  );
}

export default Greetings;
