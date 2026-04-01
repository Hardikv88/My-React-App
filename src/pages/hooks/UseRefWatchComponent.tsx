import { useRef, useState } from "react";

export default function UseRefWatchComponent() {
  const [time, setTime] = useState(0);

  let timeRef = useRef(null);

  function startTimer() {
    ResetTimer();
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function ResetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
        Watch : {time} secound{" "}
      </h1>
      <br /> <br />
      <button
        onClick={startTimer}
        type="button"
        className="bg-gray-400 text-white m-4 px-4 py-2 rounded"
      >
        Start
      </button>
      <button
        onClick={stopTimer}
        type="button"
        className="bg-gray-400 text-white m-4 px-4 py-2 rounded"
      >
        Stop
      </button>
      <button
        onClick={ResetTimer}
        type="button"
        className="bg-gray-400 text-white m-4 px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
}
