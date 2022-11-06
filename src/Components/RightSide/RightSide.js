import React from "react";
import "./RightSide.css";
import Cal from "../Calendar/Cal";
import { TimerComponent } from "../Timer/Timer";

import { useState } from "react";

const RightSide = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="RightSide">
      <div className="calendar-container">
        <h2>Calendar</h2>
        <Cal />
      </div>

      <div className="Timer">
        <TimerComponent />
      </div>
    </div>
  );
};

export default RightSide;
