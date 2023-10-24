import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";
import { serviceCard } from "../data/appData";
import { ServiceCard } from "./ServiceCard";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export const ServiceSection = ({ variant, btnClass }) => {
  return (
    <section className="bg-light py-20 lg:py-40">
      <div className="container space-y-24">
        <div className="flex items-center justify-between">
          <SectionHeader icon={"/images/icon.png"} variants={variant}>
            <SectionHeader.Hint>Services</SectionHeader.Hint>
            <SectionHeader.Title>Services We Provide</SectionHeader.Title>
          </SectionHeader>
          <Button
            variants={"primary"}
            text="Our Services"
            customClass={btnClass}
            rightArrowIcon={<ArrowRightCircleIcon className="h-6 w-6" />}
            role={"link"}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {serviceCard.map((item) => (
            <ServiceCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              description={item.description}
              center={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
