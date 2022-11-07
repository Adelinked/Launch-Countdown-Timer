import { memo } from "react";
import NumberComponent from "./NumberComponent";

interface OneCounterProps {
  title: String;
  time: String;
}
const OneCounter = ({ title, time }: OneCounterProps): JSX.Element => {
  return (
    <div className="flex flex-col ">
      <div className="w-[70px] h-[70px] lg:w-[150px] lg:h-[150px] bg-veryDarkBlue2 ">
        <NumberComponent title={title} time={time} top />
        <NumberComponent title={title} time={time} />
      </div>
      <span className=" mt-4 text-[0.5rem] lg:text-[1rem] text-grayishBleu tracking-widest">
        {title}
      </span>
    </div>
  );
};

export default memo(
  OneCounter,
  (prevComp, nextComp) => prevComp.time === nextComp.time
);
