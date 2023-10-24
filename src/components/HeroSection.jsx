import React from "react";
import { Button } from "./Button";

export const HeroSection = ({ title, customClass }) => {
  return (
    <>
      <section
        className={`${customClass} bg-no-repeat bg-cover bg-center min-h-[300px] max-h-[600px] relative overflow-hidden`}
      >
        <div className="pb-[32%] overflow-hidden h-full">
          <div className=" absolute inset-0 bottom-[23%]">
            <div className="font-primary flex justify-center h-full w-full">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl text-primary font-extrabold mt-auto pb-36ss">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
