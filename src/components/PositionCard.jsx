import React from "react";
import { Button } from "./Button";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function PositionCard({ description, title, badge }) {
  return (
    <div className="bg-term-gradient rounded-lg py-10 px-6 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20">
        <div className="space-y-3 lg:space-y-7 order-2 sm:order-1">
          <div className="bg-transparent border border-primary text-primary text-lg py-2 px-6 rounded-full w-fit">
            {badge}
          </div>
          <h5 className="text-2xl text-primary font-semibold">{title}</h5>
          <p className="text-lg">{description}</p>
          <Button
            variants={"primary"}
            text="Apply Now"
            customClass={"w-fit !px-6"}
            role={"link"}
            rightArrowIcon={<ArrowRightCircleIcon className="h-6 w-6" />}
          />
        </div>
        <div className="order-1 sm:order-2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/images/position-card.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
