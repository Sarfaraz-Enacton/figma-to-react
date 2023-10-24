import React from "react";
import { HeroSection } from "../components/HeroSection";
import { ServiceSection } from "../components/ServiceSection";
import { Button } from "../components/Button";
import CtaSection from "../components/CtaSection";

export const Services = () => {
  return (
    <main>
      <HeroSection title={"Services"} customClass={"bg-service-hero"} />

      <ServiceSection variant={"vertical"} btnClass={"hidden"} />

      {/* about section */}
      <CtaSection
        title={
          <>
            Get in touch and{" "}
            <span className="text-secondary">start growing</span> your startup
            today
          </>
        }
        button={
          <>
            <Button
              variants={"primary"}
              text="Get In Touch"
              role={"link"}
              customClass={"!text-base sm:!text-lg w-fit mx-auto sm:mx-0"}
            />
            <Button
              variants={"secondary"}
              text="Get Started"
              role={"button"}
              customClass={"!text-base sm:!text-lg w-fit mx-auto sm:mx-0"}
            />
          </>
        }
      />
    </main>
  );
};
