import NumberComponent from "./NumberComponent";

interface OneCounterProps {
  title: String;
  time: String;
}
const OneCounter = ({ title, time }: OneCounterProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="w-[70px] h-[70px] bg-veryDarkBlue2 ">
        <NumberComponent title={title} time={time} top />
        <NumberComponent title={title} time={time} />
      </div>
      <span className=" mt-4 text-[0.5rem] text-grayishBleu tracking-widest">
        {title}
      </span>
    </div>
  );
};

export default OneCounter;