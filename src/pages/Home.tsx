import React from "react";
import Socials from "../components/Socials";

const Home: React.FC = () => {
  return (
    <div className="bg-primary">
      <div className="h-screen flex flex-col text-white p-4">
        <div className="flex flex-col h-full">
          <h1 className="flex text-[10vw] md:text-[12vw] font-bold text-center text-nowrap w-full leading-none">
            MY NAMES JEFF
          </h1>

          <p className="text-xl md:text-3xl md:px-2 font-light">
            No seriously, I promise.
          </p>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Home;
