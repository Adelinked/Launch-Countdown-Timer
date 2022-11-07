import { useState, useEffect } from "react";
import { devideTime } from "../utils/fonctions";
import OneCounter from "./OneCounter";

const Counter = () => {
  const [timeLeft, setTimeLeft] =
    useState(1209600); /*14days*24hours*3600seconds*/
  let timerId: ReturnType<typeof setTimeout>;
  useEffect(() => {
    timerId = setInterval(() => {
      if (timeLeft === 0) {
        return;
      }
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [timeLeft]);
  let timeHolder = devideTime(timeLeft);
  return (
    <div className="flex items-center gap-4">
      <OneCounter title="DAYS" time={timeHolder[0]} />
      <OneCounter title="HOURS" time={timeHolder[1]} />
      <OneCounter title="MINUTES" time={timeHolder[2]} />
      <OneCounter title="SECONDS" time={timeHolder[3]} />
    </div>
  );
};

export default Counter;
