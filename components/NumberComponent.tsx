import { useEffect, useRef } from "react";

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
  const flip = useRef(null);
  useEffect(() => {
    const element = flip.current as HTMLDivElement | null;
    if (!element) return;
    const rotateClass = top ? "rotateTop" : "rotateBottom";

    const numbersDiv = element.firstChild as HTMLDivElement | null;
    if (!numbersDiv) return;
    numbersDiv.style.display = "none";
    element.classList.add(rotateClass);
    setTimeout(() => {
      element.classList.remove(rotateClass);
      if (!numbersDiv) return;
      numbersDiv.style.display = "flex";
    }, 300);
  }, [time]);

  return (
    <div
      className={`numbersOuterContainer test duration-300  ${
        top ? "mb-[0.04rem] topOpacity" : "blackShadow"
      }`}
      id={`${top ? "top" : "bottom"}Numbers${title}`}
      ref={flip}
    >
      <div
        className={`numbersInnerContainer ${
          top
            ? "bottom-[-21px] lg:bottom-[-30px]"
            : "top-[-21px] lg:top-[-30px]"
        }`}
      >
        <span className={`${top ? "topOpacity" : ""} w-[50%]`}>{time[0]}</span>
        <span className={`{top ? "topOpacity}:"" w-[50%]`}>{time[1]}</span>
      </div>
    </div>
  );
};

export default NumberComponent;
