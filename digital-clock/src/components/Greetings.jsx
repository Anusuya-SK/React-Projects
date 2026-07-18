import { useState } from "react";
import morning from "../assets/morning.png";
import cloudy from "../assets/cloudy.png";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

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
    image = morning;
  } else if (hours >= 12 && hours < 18) {
    msg = "Good Afternoon";
    image = sun;
  } else if (hours >= 18 && hours < 22) {
    msg = "Good Evening";
    image = cloudy;
  } else if (hours >= 22 && hours < 23) {
    msg = "Good Night";
    image = moon;
  } else {
    msg = "Good Night";
    image = moon;
  }

  return (
    <div className="container greetings">
      <h1>Greetings Section</h1>
      <h2>{time}</h2>
      <img src={image} alt="image" />
      <p>{msg}</p>
    </div>
  );
}

export default Greetings;
