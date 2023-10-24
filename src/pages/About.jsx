import React from "react";
import { HeroSection } from "../components/HeroSection";
import { SubscribeSection } from "../components/SubscribeSection";
import { SectionHeader } from "../components/SectionHeader";
import { Button } from "../components/Button";
import { aboutCard, teamCard } from "../data/appData";
import { ServiceCard } from "../components/ServiceCard";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import TeamCard from "../components/TeamCard";

export const About = () => {
  return (
    <main>
      <HeroSection
        title={
          <>
            About <span className="text-secondary">Us</span>
          </>
        }
        customClass={"bg-about-hero"}
      />
      <SubscribeSection />

      {/* why section */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 flex-shrink-0 mx-auto max-h-[500px]">
              <img
                className="h-full lg:h-auto lg:w-full xl:-ml-20"
                src="/images/digital-marketing.png"
                alt=""
              />
            </div>
            <div className="md:col-span-7 w-full">
              <SectionHeader
                icon={"/images/get-the-best.png"}
                variants={"horizontal"}
              >
                <SectionHeader.Hint>ABOUT US</SectionHeader.Hint>
                <SectionHeader.Title customClass={"text-xl"}>
                  The #1 digital marketing services company
                </SectionHeader.Title>
              </SectionHeader>
              <div className="border-t-[1px] border-light-gray my-5 lg:my-8"></div>
              <div className="space-y-8">
                <p className="text-dark text-base lg:text-lg">
                  At growthan.com, we are passionate about helping businesses
                  succeed through data-driven marketing strategies. With a focus
                  on performance, we work closely with our clients to develop
                  customized solutions that drive growth, engagement, and ROI.
                </p>
                <p className="text-dark text-base lg:text-lg">
                  Our team of experienced professionals is dedicated to
                  delivering results and helping you achieve your goals. Contact
                  us today to learn more about how we can help take your
                  business to the next level.
                </p>
              </div>
              <Button
                variants={"secondary"}
                text="Get In Touch"
                customClass={"w-fit mt-8"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* about card section */}
      <section className="pb-20">
        <div className="container">
          <div className="space-y-14">
            <SectionHeader
              variants={"vertical"}
              icon={"/images/our-values.png"}
            >
              <SectionHeader.Hint>OUR VALUES</SectionHeader.Hint>
              <SectionHeader.Title>
                The core values behind our work
              </SectionHeader.Title>
            </SectionHeader>

            <div className="grid lg:grid-cols-3 gap-7">
              {aboutCard.map((item) => {
                return (
                  <ServiceCard
                    key={item.id}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    description={item.description}
                    centerAligned={true}
                  />
                );
              })}
            </div>

            <div className="flex gap-3 sm:gap-7 justify-center">
              <Button
                variants={"secondary"}
                text="Get In Touch"
                customClass={""}
                // rightArrowIcon={""}
                role={"link"}
              />
              <Button
                variants={"primary"}
                text="Our Services"
                customClass={""}
                rightArrowIcon={<ArrowRightCircleIcon className="h-6 w-6" />}
                role={"link"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* expert's section */}
      <section className="pb-24">
        <div className="container">
          <div className="space-y-14">
            <SectionHeader variants={"vertical"} icon={"/images/our-team.png"}>
              <SectionHeader.Hint>OUR TEAM</SectionHeader.Hint>
              <SectionHeader.Title>
                Our team of expert marketers
              </SectionHeader.Title>
            </SectionHeader>

            <div className="grid md:grid-cols-3 gap-7">
              {teamCard.map((item) => (
                <TeamCard
                  key={item.id}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  job={item.job}
                  socialIcons={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_20_129)">
                          <rect
                            x="0.0283203"
                            width="26.9717"
                            height="26.9717"
                            rx="13.4859"
                            fill="#1877F2"
                          />
                          <path
                            d="M18.7637 17.3841L19.3616 13.4859H15.6214V10.9573C15.6214 9.89051 16.1429 8.8501 17.8181 8.8501H19.5197V5.53131C19.5197 5.53131 17.9762 5.26791 16.5011 5.26791C13.4194 5.26791 11.4071 7.13539 11.4071 10.5148V13.4859H7.98291V17.3841H11.4071V26.8084C12.0945 26.9164 12.7978 26.9717 13.5142 26.9717C14.2307 26.9717 14.9339 26.9164 15.6214 26.8084V17.3841H18.7637Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_20_129">
                            <rect
                              x="0.0283203"
                              width="26.9717"
                              height="26.9717"
                              rx="13.4859"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                      >
                        <rect
                          width="26.9717"
                          height="26.9717"
                          rx="13.4859"
                          fill="#1D9BF0"
                        />
                        <path
                          d="M11.0179 20.5997C16.9989 20.5997 20.2692 15.6436 20.2692 11.3484C20.2692 11.2068 20.2692 11.0652 20.2624 10.9303C20.8963 10.4718 21.4492 9.89864 21.8875 9.24458C21.3076 9.50081 20.6805 9.67612 20.0197 9.75704C20.694 9.35246 21.2065 8.71863 21.4492 7.95668C20.8221 8.32754 20.1276 8.59725 19.3859 8.7456C18.7925 8.11176 17.9496 7.72067 17.0124 7.72067C15.2187 7.72067 13.7623 9.17715 13.7623 10.9708C13.7623 11.227 13.7892 11.4765 13.8499 11.7125C11.146 11.5776 8.75226 10.283 7.14744 8.31405C6.87098 8.7928 6.70915 9.35246 6.70915 9.94584C6.70915 11.0719 7.2823 12.0699 8.15888 12.6498C7.62619 12.6363 7.12721 12.4879 6.68892 12.2452C6.68892 12.2587 6.68892 12.2722 6.68892 12.2856C6.68892 13.8635 7.80825 15.1716 9.29843 15.4751C9.02872 15.5492 8.73877 15.5897 8.44208 15.5897C8.23305 15.5897 8.03076 15.5695 7.82847 15.529C8.23979 16.8236 9.44004 17.7609 10.8628 17.7879C9.75021 18.6577 8.34768 19.1769 6.82378 19.1769C6.5608 19.1769 6.30457 19.1634 6.04834 19.1297C7.4711 20.0602 9.1838 20.5997 11.0179 20.5997Z"
                          fill="white"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="27"
                        viewBox="0 0 28 27"
                        fill="none"
                      >
                        <rect
                          x="0.48584"
                          width="26.9717"
                          height="26.9717"
                          rx="13.4859"
                          fill="url(#paint0_linear_20_147)"
                        />
                        <path
                          d="M13.9739 6.85288C16.136 6.85288 16.3898 6.86252 17.2444 6.90107C18.0347 6.93641 18.462 7.06812 18.7479 7.18057C19.127 7.32835 19.3969 7.50183 19.6796 7.78454C19.9623 8.06725 20.139 8.33711 20.2835 8.7162C20.3928 9.00212 20.5277 9.4294 20.563 10.2197C20.6016 11.0743 20.6112 11.3281 20.6112 13.4902C20.6112 15.6522 20.6016 15.906 20.563 16.7606C20.5277 17.5509 20.396 17.9782 20.2835 18.2641C20.1358 18.6432 19.9623 18.9131 19.6796 19.1958C19.3969 19.4785 19.127 19.6552 18.7479 19.7997C18.462 19.909 18.0347 20.0439 17.2444 20.0792C16.3898 20.1178 16.136 20.1274 13.9739 20.1274C11.8119 20.1274 11.5581 20.1178 10.7035 20.0792C9.91319 20.0439 9.48591 19.9122 9.19999 19.7997C8.8209 19.652 8.55104 19.4785 8.26833 19.1958C7.98562 18.9131 7.80892 18.6432 7.66435 18.2641C7.55512 17.9782 7.42019 17.5509 7.38486 16.7606C7.3463 15.906 7.33667 15.6522 7.33667 13.4902C7.33667 11.3281 7.3463 11.0743 7.38486 10.2197C7.42019 9.4294 7.55191 9.00212 7.66435 8.7162C7.81213 8.33711 7.98562 8.06725 8.26833 7.78454C8.55104 7.50183 8.8209 7.32513 9.19999 7.18057C9.48591 7.07134 9.91319 6.93641 10.7035 6.90107C11.5581 6.8593 11.8151 6.85288 13.9739 6.85288ZM13.9739 5.39435C11.7765 5.39435 11.5002 5.40399 10.636 5.44254C9.77505 5.48109 9.18714 5.61923 8.67312 5.81841C8.13982 6.02402 7.69005 6.30352 7.24029 6.75329C6.79052 7.20305 6.51423 7.65603 6.30541 8.18612C6.10623 8.70014 5.96809 9.28805 5.92954 10.1522C5.89099 11.0132 5.88135 11.2895 5.88135 13.4869C5.88135 15.6844 5.89099 15.9607 5.92954 16.8249C5.96809 17.6858 6.10623 18.2737 6.30541 18.791C6.51102 19.3243 6.79052 19.774 7.24029 20.2238C7.69005 20.6736 8.14303 20.9499 8.67312 21.1587C9.18714 21.3579 9.77505 21.496 10.6392 21.5346C11.5034 21.5731 11.7765 21.5827 13.9772 21.5827C16.1778 21.5827 16.4509 21.5731 17.3151 21.5346C18.1761 21.496 18.764 21.3579 19.2812 21.1587C19.8145 20.9531 20.2643 20.6736 20.714 20.2238C21.1638 19.774 21.4401 19.3211 21.6489 18.791C21.8481 18.277 21.9862 17.6891 22.0248 16.8249C22.0633 15.9607 22.073 15.6876 22.073 13.4869C22.073 11.2863 22.0633 11.0132 22.0248 10.149C21.9862 9.28805 21.8481 8.70014 21.6489 8.1829C21.4433 7.64961 21.1638 7.19984 20.714 6.75007C20.2643 6.30031 19.8113 6.02402 19.2812 5.8152C18.7672 5.61602 18.1793 5.47788 17.3151 5.43932C16.4477 5.40399 16.1714 5.39435 13.9739 5.39435Z"
                          fill="white"
                        />
                        <path
                          d="M13.974 9.33301C11.6802 9.33301 9.81689 11.1931 9.81689 13.4901C9.81689 15.7872 11.677 17.6473 13.974 17.6473C16.271 17.6473 18.1312 15.7872 18.1312 13.4901C18.1312 11.1931 16.271 9.33301 13.974 9.33301ZM13.974 16.1855C12.4834 16.1855 11.2754 14.9776 11.2754 13.4869C11.2754 11.9963 12.4834 10.7883 13.974 10.7883C15.4647 10.7883 16.6726 11.9963 16.6726 13.4869C16.6726 14.9776 15.4647 16.1855 13.974 16.1855Z"
                          fill="white"
                        />
                        <path
                          d="M18.2949 10.1362C18.8308 10.1362 19.2651 9.70178 19.2651 9.16595C19.2651 8.63012 18.8308 8.19574 18.2949 8.19574C17.7591 8.19574 17.3247 8.63012 17.3247 9.16595C17.3247 9.70178 17.7591 10.1362 18.2949 10.1362Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_20_147"
                            x1="13.9717"
                            y1="0"
                            x2="13.9717"
                            y2="26.9717"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F9D801" />
                            <stop offset="0.484375" stopColor="#EE0B1F" />
                            <stop offset="1" stopColor="#7A39AD" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </>
                  }
                />
              ))}
              {/* <TeamCard
                imgUrl={"/images/team-1.jpg"}
                name={"Dr. Shailesh"}
                job={"M.S (Ophthalmology) Gold Medalist"}
              /> */}
              {/* <div className="border border-gray-150 rounded-[30px] p-6">
                <div className="rounded-t-3xl overflow-hidden">
                  <img className="w-full" src="/images/team-1.jpg" alt="" />
                </div>
                <div className="py-6 space-y-6">
                  <div className="h-[2.5px] w-[80px] bg-primary mx-auto mt-2"></div>
                  <div className="text-center">
                    <h3 className="text-2xl text-primary font-semibold">
                      Dr. Shailesh Agrawal
                    </h3>
                    <p className="text-lg text-dark">
                      M.S (Ophthalmology) Gold Medalist
                    </p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_20_129)">
                        <rect
                          x="0.0283203"
                          width="26.9717"
                          height="26.9717"
                          rx="13.4859"
                          fill="#1877F2"
                        />
                        <path
                          d="M18.7637 17.3841L19.3616 13.4859H15.6214V10.9573C15.6214 9.89051 16.1429 8.8501 17.8181 8.8501H19.5197V5.53131C19.5197 5.53131 17.9762 5.26791 16.5011 5.26791C13.4194 5.26791 11.4071 7.13539 11.4071 10.5148V13.4859H7.98291V17.3841H11.4071V26.8084C12.0945 26.9164 12.7978 26.9717 13.5142 26.9717C14.2307 26.9717 14.9339 26.9164 15.6214 26.8084V17.3841H18.7637Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_129">
                          <rect
                            x="0.0283203"
                            width="26.9717"
                            height="26.9717"
                            rx="13.4859"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <rect
                        width="26.9717"
                        height="26.9717"
                        rx="13.4859"
                        fill="#1D9BF0"
                      />
                      <path
                        d="M11.0179 20.5997C16.9989 20.5997 20.2692 15.6436 20.2692 11.3484C20.2692 11.2068 20.2692 11.0652 20.2624 10.9303C20.8963 10.4718 21.4492 9.89864 21.8875 9.24458C21.3076 9.50081 20.6805 9.67612 20.0197 9.75704C20.694 9.35246 21.2065 8.71863 21.4492 7.95668C20.8221 8.32754 20.1276 8.59725 19.3859 8.7456C18.7925 8.11176 17.9496 7.72067 17.0124 7.72067C15.2187 7.72067 13.7623 9.17715 13.7623 10.9708C13.7623 11.227 13.7892 11.4765 13.8499 11.7125C11.146 11.5776 8.75226 10.283 7.14744 8.31405C6.87098 8.7928 6.70915 9.35246 6.70915 9.94584C6.70915 11.0719 7.2823 12.0699 8.15888 12.6498C7.62619 12.6363 7.12721 12.4879 6.68892 12.2452C6.68892 12.2587 6.68892 12.2722 6.68892 12.2856C6.68892 13.8635 7.80825 15.1716 9.29843 15.4751C9.02872 15.5492 8.73877 15.5897 8.44208 15.5897C8.23305 15.5897 8.03076 15.5695 7.82847 15.529C8.23979 16.8236 9.44004 17.7609 10.8628 17.7879C9.75021 18.6577 8.34768 19.1769 6.82378 19.1769C6.5608 19.1769 6.30457 19.1634 6.04834 19.1297C7.4711 20.0602 9.1838 20.5997 11.0179 20.5997Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
