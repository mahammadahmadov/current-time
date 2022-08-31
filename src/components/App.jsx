import React from "react";

function App() {
  let now = new Date().toLocaleTimeString();

  let [time, setTime] = React.useState(now);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
