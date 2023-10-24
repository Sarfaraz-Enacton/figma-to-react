import React from "react";
import { HeroSection } from "../components/HeroSection";
import { SectionHeader } from "../components/SectionHeader";
import { Button } from "../components/Button";
import FormInput from "../components/FormInput";
import PositionCard from "../components/PositionCard";
import { positionCard } from "../data/appData";

export default function Career() {
  return (
    <main>
      <HeroSection title={"Career"} customClass={"bg-contact-hero"} />

      {/* open position section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-y-10 justify-between items-center pb-12">
            <SectionHeader
              variants={"horizontal"}
              icon={"/images/position-icon.png"}
            >
              <SectionHeader.Hint>Open Positions</SectionHeader.Hint>
              <SectionHeader.Title>Positions</SectionHeader.Title>
            </SectionHeader>
            {/* <form action=""><FormInput /></form> */}
            <div className="flex gap-x-5 ">
              <FormInput
                type={"search"}
                placeholder={"Search your role.."}
                id={"search"}
                customClass={"border-2 border-primary max-w-[350px]"}
              />
              <Button
                variants={"primary"}
                text="Search"
                customClass={"w-fit mx-auto lg:mx-0"}
                role={"button"}
              />
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {positionCard.map((item) => (
              <PositionCard
                key={item.id}
                badge={item.badge}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* join us section */}
      <section className="pb-24">
        <div className="container">
          <div className="bg-card rounded-lg py-12 px-6 sm:px-24 sm:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl">
                  Why join us
                </h2>
                <div className="border-t border-gray-250 my-6"></div>
                <p className="text-dark text-base md:text-lg">
                  Are you ready to apply your knowledge and background to
                  exciting new challenges? From learning to leadership, this is
                  your chance to take your career to the next level. Search and
                  apply for a job today.you won’t find the employees amidst a
                  hustle to complete the day-to-day tasks, but you will notice
                  their enthusiasm at its peak to achieve one common goal.
                </p>
                <ul className="space-y-7 mt-7 text-dark text-base md:text-xl">
                  <li className="flex gap-2.5">
                    <svg
                      className="flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M13 0C5.83187 0 0 5.83187 0 13C0 20.1681 5.83187 26 13 26C20.1681 26 26 20.1681 26 13C26 5.83187 20.1681 0 13 0ZM10.625 19.5238L5.5875 13.9256L7.07438 12.5875L10.5744 16.4762L18.875 6.59125L20.4088 7.875L10.625 19.5238Z"
                        fill="#162466"
                      />
                    </svg>
                    <span>Dolor duis lorem enim eu nulla semper </span>
                  </li>
                  <li className="flex gap-2.5">
                    <svg
                      className="flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M13 0C5.83187 0 0 5.83187 0 13C0 20.1681 5.83187 26 13 26C20.1681 26 26 20.1681 26 13C26 5.83187 20.1681 0 13 0ZM10.625 19.5238L5.5875 13.9256L7.07438 12.5875L10.5744 16.4762L18.875 6.59125L20.4088 7.875L10.625 19.5238Z"
                        fill="#162466"
                      />
                    </svg>
                    <span>Lorem a eget blandit ac neque pulvinar</span>
                  </li>
                  <li className="flex gap-2.5">
                    <svg
                      className="flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M13 0C5.83187 0 0 5.83187 0 13C0 20.1681 5.83187 26 13 26C20.1681 26 26 20.1681 26 13C26 5.83187 20.1681 0 13 0ZM10.625 19.5238L5.5875 13.9256L7.07438 12.5875L10.5744 16.4762L18.875 6.59125L20.4088 7.875L10.625 19.5238Z"
                        fill="#162466"
                      />
                    </svg>
                    <span>Pellentesque non integer ac id bibendum</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-8 md:space-y-12 relative z-10">
                <div className="absolute inset-0 left-10 h-[77%] border-l-2 border-dashed border-dark mt-20 -z-10"></div>

                <div className="flex gap-x-3 sm:gap-x-6">
                  <div className="w-[86px] h-[86px] bg-light rounded-full flex-shrink-0 flex justify-center items-center border-[5px] sm:border-[9px] border-pink ">
                    <img src="/images/goals.png" alt="" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl md:text-2xl text-primary font-semibold">
                      Flexible Timings & Work From Home Facility
                    </h4>
                    <p className="text-dark text-base md:text-lg">
                      consectetur amet dolor sit comeneer ilremsilom dolce
                      issilm acalrm{" "}
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-3 sm:gap-x-6">
                  <div className="w-[86px] h-[86px] bg-light rounded-full flex-shrink-0 flex justify-center items-center border-[5px] sm:border-[9px] border-pink ">
                    <img src="/images/megaphone.png" alt="" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl md:text-2xl text-primary font-semibold">
                      Highest Payroll in the Region
                    </h4>
                    <p className="text-dark text-base md:text-lg">
                      consectetur amet dolor sit comeneer ilremsilom dolce
                      issilm acalrm{" "}
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-3 sm:gap-x-6">
                  <div className="w-[86px] h-[86px] bg-light rounded-full flex-shrink-0 flex justify-center items-center border-[5px] sm:border-[9px] border-pink ">
                    <img src="/images/rank-icon.png" alt="" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl md:text-2xl text-primary font-semibold">
                      Leave Encashment
                    </h4>
                    <p className="text-dark text-base md:text-lg">
                      consectetur amet dolor sit comeneer ilremsilom dolce
                      issilm acalrm{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
