import React from "react";
import { featureImg } from "../data/appData";

export const FeatureSection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between mx-auto gap-8 lg:gap-24 overflow-x-auto p-4">
          {featureImg.map((item) => (
            <div key={item.id} className="flex-shrink-0 max-h-[35px]">
              <img src={item.url} alt={item.url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
