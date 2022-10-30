import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import { FaFacebookSquare, FaPinterest, FaInstagram } from "react-icons/fa";

const Home: NextPage = () => {
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
  return (
    <div>
      <Head>
        <title>Launch Countdown Timer</title>
        <meta
          name="description"
          content="Asolution to Launch Countdown Timer frontend mentor challenge"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
      </Head>

      <main className=" bg-veryDarkBlue  flex text-sm w-full  flex-1 flex-col  items-center text-center background ">
        <h1 className=" mt-40 sm:mt-32 mb-16 sm:mb-24 text-2xl lg:text-3xl tracking-wider text-white">
          WE'RE LAUNCHING SOON
        </h1>
        <Counter timeLeft={timeLeft} />
        <div className="flex hillsBackgroud gap-8 mt-40 sm:mt-36 h-44 sm:h-52 w-full justify-center items-center text-3xl text-grayishBleu">
          {" "}
          <FaFacebookSquare className=" hover:text-softRed cursor-pointer background" />
          <FaPinterest className="hover:text-softRed  cursor-pointer  " />
          <FaInstagram className="hover:text-softRed cursor-pointer " />
        </div>
      </main>
      <div role="contentinfo" className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://adelinked.netlify.app" rel="noreferrer">
          Adelinked
        </a>
        .
      </div>
    </div>
  );
};

export default Home;
