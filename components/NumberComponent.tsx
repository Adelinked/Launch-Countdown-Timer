import { useEffect } from "react";

interface NumberComponentProps {
  title: String;
  time: String;
  top?: Boolean;
}

const NumberComponent = ({
  title,
  time,
  top,
}: NumberComponentProps): JSX.Element => {
  useEffect(() => {
    const id = (top ? "top" : "bottom") + "Numbers" + title;

    const element = document.getElementById(id);
    if (!element) return;
    const rotateClass = top ? "rotateTop" : "rotateBottom";
    element.classList.add(rotateClass);

    const numbersDiv = element.firstChild as HTMLDivElement | null;
    if (!numbersDiv) return;
    numbersDiv.style.display = "none";

    setTimeout(() => {
      element.classList.remove(rotateClass);
      if (!numbersDiv) return;
      numbersDiv.style.display = "flex";
    }, 300);
  }, [time]);

  return (
    <div
      className={`numbersOuterContainer test duration-300  ${
        top ? "mb-[0.04rem] topOpacity" : ""
      }`}
      id={`${top ? "top" : "bottom"}Numbers${title}`}
    >
      <div
        className={`numbersInnerContainer ${
          top ? "bottom-[-21px]" : "top-[-21px]"
        }`}
      >
        <span className={`${top ? "topOpacity" : ""} w-[50%]`}>{time[0]}</span>
        <span className={`{top ? "topOpacity}:"" w-[50%]`}>{time[1]}</span>
      </div>
    </div>
  );
};

export default NumberComponent;
