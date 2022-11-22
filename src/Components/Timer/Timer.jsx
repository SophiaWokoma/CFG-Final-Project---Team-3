import { useEffect, useRef, useState } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

// Styles
import "./Timer.css";

let interval;
export const TimerComponent = () => {
  // Create a reference for html element to update it with minutes and seconds left
  const timerRef = useRef(null);

  // Create a state for tracking minutes and seconds
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // State for tracking pause status
  const [paused, setPaused] = useState(false);

  // Function receives  time and updates UI with minutes and seconds left
  function pomodoroBreak(time) {
    clearInterval(interval);

    // Convert received time, so I can determine the remaining time in minutes and seconds
    time = time * 60;

    // Update UI with received time
    if (parseInt(minutes) !== Math.floor(time / 60))
      setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);

    // Create an interval function to calculate the remaining minutes and seconds
    interval = setInterval(function () {
      if (time <= 0) return;
      time--;
      setMinutes(Math.floor(time / 60));
      setSeconds(time % 60);
    }, 1000);

    setPaused(false);
  }

  function handlePause() {
    // Resuming time if paused
    if (paused) pomodoroBreak(parseInt(minutes) + parseInt(seconds) / 60);
    else clearInterval(interval);

    setPaused(!paused);
  }

  // Create useEffect function to update UI code while time is decreased
  useEffect(() => {
    const updateUi = () => {
      if (String(minutes).length === 1) {
        setMinutes(`0${minutes}`);
      }

      if (String(seconds).length === 1) {
        setSeconds(`0${seconds}`);
      }
      timerRef.current.innerHTML = minutes + ":" + seconds;
      document.title = minutes + ":" + seconds;
    };

    // UI should be updated only if the timer is not paused
    if (!paused) updateUi();
  }, [minutes, seconds, paused]);

  // function to stop the timer

  const stop = () => {
    clearInterval(interval);
    interval = null;
  };

  const handleStop = () => {
    stop();
  };

  return (
    <main>
      <h2>Start Session</h2>
      <div className="text-container">
        <Tippy
          content="Set the Pomodoro timer and focus on a task. When the time is up,
   take a break then repeat!"
        >
          <p>
            How do I use a Pomodoro timer?
            {/* <span className="secondSpan">
   Set the Pomodoro timer and focus on a task. When the time is up,
   take a break then repeat!
 </span> */}
          </p>
        </Tippy>
      </div>
      <div className="timer-main">
        <div className="button-container">
          <button
            onClick={() => pomodoroBreak(25)}
            id="pomo"
            data-testid="pomo"
          >
            Pomodoro
          </button>
          <button onClick={() => pomodoroBreak(5)} id="break">
            Short Break
          </button>
        </div>

        <div className="container-timer">
          <span className="timer" ref={timerRef} data-testid="timer">
            00:00
          </span>
        </div>
        {/* <div className="container-stop">
          <button onClick={handleStop} id="stop">
            Stop
          </button>
        </div> */}
        <button
          className={` ${paused ? "paused" : "resumed"}`}
          onClick={() => handlePause()}
          id="pause"
        >
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
    </main>
  );
};
