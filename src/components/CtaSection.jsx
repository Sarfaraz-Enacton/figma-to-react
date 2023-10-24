import React from "react";
import { Button } from "./Button";

export default function CtaSection({ button, title }) {
  return (
    <section className="pb-20 lg:pb-40">
      <div className="container">
        <div className="space-y-8 bg-card md:bg-service-cta bg-no-repeat bg-cover bg-center rounded-[30px] py-8 px-6 sm:space-y-14 sm:px-16 sm:py-20">
          <h2 className="text-[45px]s text-3xl sm:text-5xl text-center md:text-left font-bold text-primary max-w-[620px]">
            {title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:gap-7 md:justify-normal">
            {button}
          </div>
        </div>
      </div>
    </section>
  );
}
