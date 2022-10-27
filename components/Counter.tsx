import { useEffect, useState } from "react";
import { devideTime } from "../utils/fonctions";
import OneCounter from "./OneCounter";

interface CounterProps {
  timeLeft: Number;
}

const Counter = ({ timeLeft }: CounterProps) => {
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
