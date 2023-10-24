import React from "react";

export const ServiceCard = ({ imgUrl, title, description, centerAligned }) => {
  return (
    <div className="bg-card rounded-[30px] p-10">
      <div
        className={`h-[153px] w-[153px] rounded-full bg-light flex justify-center items-center ${
          centerAligned ? "mx-auto" : ""
        }`}
      >
        <img className={``} src={imgUrl} alt="" />
      </div>
      <div className="pt-6 space-y-4">
        <h2
          className={`text-2xl text-primary font-semibold ${
            centerAligned ? "text-center" : ""
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-dark text-lg ${centerAligned ? "text-center" : ""}`}
        >
          {description}
        </p>
        {centerAligned ? (
          <div className="h-[2.5px] w-[80px] bg-primary mx-auto !mt-11"></div>
        ) : null}
      </div>
    </div>
  );
};
