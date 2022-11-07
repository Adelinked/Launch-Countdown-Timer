import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../components/Counter";
import IconsComponent from "../components/IconsComponent";

const Home: NextPage = () => {
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
        <Counter />
        <IconsComponent />
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
