import React from "react";
import { ServiceSection } from "../components/ServiceSection";
import { SectionHeader } from "../components/SectionHeader";
import { FeatureSection } from "../components/FeatureSection";
import { Button } from "../components/Button";
import { TestimonialSwiper } from "../components/TestimonialSwiper";
import { SubscribeSection } from "../components/SubscribeSection";

export const Home = () => {
  return (
    <main>
      {/* hero section */}
      <section className="bg-section-gradientss hero-bg z-10 relative overflow-hidden bg-no-repeat bg-cover bg-center">
        {/* <div className="hidden lg:block absolute right-0 z-0 bottom-10 top-0">
          <img
            className="max-h-[108%]"
            src="/images/hero-bg.png"
            alt="hero-bg"
          />
        </div> */}
        <div className="container min-h-screen flex z-20 pt-20ss lg:pt-32ss">
          <div className="grid lg:grid-cols-2 gap-y-8 py-24 md:py-32 my-auto 2xl:-mr-[150px]">
            <div className="font-primary flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl text-primary font-extrabold">
                Driving the Digital Growth by
                <span className="text-secondary">Affiliate Marketing</span>
              </h1>
              <div className="mt-8">
                <Button
                  variants={"primary"}
                  text="Register"
                  customClass={"w-fit mx-auto lg:mx-0"}
                  role={"link"}
                />
              </div>
            </div>
            <div className="max-h-[400px] lg:max-h-[600px] z-10 order-1 lg:order-2">
              <img
                className="h-full mx-auto lg:mx-0"
                src="/images/hero-img.png"
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceSection variant={"horizontal"} btnClass={"hidden md:flex"} />
      {/* feature section  */}
      <FeatureSection />
      {/* why section */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="max-w-[326px] lg:max-w-[426px] flex-shrink-0 mx-auto">
              <img className="w-full" src="/images/why-section.png" alt="" />
            </div>
            <div className="w-full">
              <SectionHeader
                icon={"/images/get-the-best.png"}
                variants={"horizontal"}
              >
                <SectionHeader.Hint>GET THE BEST</SectionHeader.Hint>
                <SectionHeader.Title>Why Growthan?</SectionHeader.Title>
              </SectionHeader>
              <div className="border-t-[1px] border-light-gray my-5 lg:my-8"></div>
              <p className="text-dark text-base lg:text-lg">
                We at Growthan provide a robust platform for wide range of
                Performance Marketing Services. We expertise in various models
                of marketing to suit our clients requirement and generate best
                ROI. we cater to clients from different business verticals
                including, Real Money Gaming, e - Commerce, Banking,
                Entertainment, Insurance, Travel, Finance, Sports, Automobile,
                etc. Our highly dedicated team of expert affiliate marketing
                managers provide services for our advertisers and publishers to
                mutually grow their business, revenue and drive successful
                results.
              </p>
              <Button
                variants={"primary"}
                text="Register"
                customClass={"w-fit mt-8"}
              />
            </div>
          </div>
        </div>
      </section>
      {/* how we section */}
      <section className="lg:py-20">
        <div className="container">
          <div className="bg-gradient-to-br from-light-blue via-light-red to-light-yellow py-20">
            <SectionHeader
              icon={"/images/process.png"}
              variants={"vertical"}
              customClass={""}
            >
              <SectionHeader.Hint>process</SectionHeader.Hint>
              <SectionHeader.Title>How we work</SectionHeader.Title>
            </SectionHeader>
            <div className="max-w-[900px] mx-auto pt-16 px-4 sm:px-8 space-y-12 relative z-10">
              <div className="absolute hidden md:block inset-0 top-20 h-[77%] border-l-2 border-dashed border-dark mt-20 -z-10 w-fit md:mx-auto"></div>
              <div className="grid md:grid-cols-[1fr_86px_1fr] gap-y-8 md:gap-x-8 z-10">
                <div className="max-w-[260px] w-full mx-auto order-3 md:order-1 col-span-3 md:col-span-1">
                  <img src="/images/process-1.png" alt="process-1" />
                </div>
                <div className="w-[50px] h-[50px] sm:w-[86px] sm:h-[86px] bg-light rounded-full flex-shrink-0 flex justify-center items-center border-[5px] sm:border-[9px] border-pink mt-8 order-2 md:order-2">
                  <span className="text-2xl sm:text-3xl text-primary font-semibold">
                    1
                  </span>
                </div>
                <div className="mt-8 order-2 md:order-3 pl-4 md:pl-0">
                  <h3 className="text-xl sm:text-2xl text-primary font-semibold">
                    Market Research
                  </h3>
                  <p className="text-base sm:text-lg text-dark">
                    We conduct thorough research to identify key opportunities
                    and trends.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_86px_1fr] gap-y-8 md:gap-x-8 z-10">
                <div className="max-w-[260px] w-full mx-auto col-span-3 md:col-span-1 order-last">
                  <img src="/images/process-2.png" alt="process-2" />
                </div>
                <div className="w-[50px] h-[50px] sm:w-[86px] sm:h-[86px] bg-light rounded-full flex-shrink-0 flex justify-center items-center border-[5px] sm:border-[9px] border-pink mt-8 order-1 md:order-2">
                  <span className="text-2xl sm:text-3xl text-primary font-semibold">
                    2
                  </span>
                </div>
                <div className="mt-8 order-2 md:order-1 md:text-right pl-4 md:pl-0">
                  <h3 className="text-xl sm:text-2xl text-primary font-semibold">
                    Analysis
                  </h3>
                  <p className="text-dark text-base sm:text-lg">
                    We analyze your performance metrics, consumer behavior and
                    trends.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_86px_1fr] gap-y-8 md:gap-x-8 z-10">
                <div className="max-w-[260px] w-full mx-auto order-3 md:order-1 col-span-3 md:col-span-1">
                  <img src="/images/process-3.png" alt="process-1" />
                </div>
                <div className="w-[50px] h-[50px] sm:w-[86px] sm:h-[86px] bg-light rounded-full flex-shrink-0 flex justify-center items-center border-[5px] sm:border-[9px] border-pink mt-8 order-2 md:order-2">
                  <span className="text-2xl sm:text-3xl text-primary font-semibold">
                    3
                  </span>
                </div>
                <div className="mt-8 order-2 md:order-3 pl-4 md:pl-0">
                  <h3 className="text-xl sm:text-2xl text-primary font-semibold">
                    Targeting
                  </h3>
                  <p className="text-base sm:text-lg text-dark">
                    We develop customized strategies that reach your target
                    audience.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_86px_1fr] gap-y-8 md:gap-x-8 z-10">
                <div className="max-w-[260px] w-full mx-auto col-span-3 md:col-span-1 order-last">
                  <img src="/images/process-4.png" alt="process-4" />
                </div>
                <div className="w-[50px] h-[50px] sm:w-[86px] sm:h-[86px] bg-light rounded-full flex-shrink-0 flex justify-center items-center border-[5px] sm:border-[9px] border-pink mt-8 order-1 md:order-2">
                  <span className="text-2xl sm:text-3xl text-primary font-semibold">
                    4
                  </span>
                </div>
                <div className="mt-8 order-2 md:order-1 md:text-right pl-4 md:pl-0">
                  <h3 className="text-xl sm:text-2xl text-primary font-semibold">
                    Update Result
                  </h3>
                  <p className="text-dark text-base sm:text-lg">
                    We provide regular updates and reports to keep you informed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <TestimonialSwiper />

      {/* subscribe section */}
      <SubscribeSection />

      {/* get the best section */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 flex-shrink-0 mx-auto">
              <img
                className="w-full"
                src="/images/solution-offer-last2.png"
                alt=""
              />
            </div>
            <div className="md:col-span-7 w-full">
              <SectionHeader
                icon={"/images/get-the-best-icon.png"}
                variants={"horizontal"}
              >
                <SectionHeader.Hint>GET THE BEST</SectionHeader.Hint>
                <SectionHeader.Title customClass={"text-xl"}>
                  We Offer Reliable Solution To Increase Brand Visibility
                </SectionHeader.Title>
              </SectionHeader>
              <div className="border-t-[1px] border-light-gray my-5 lg:my-8"></div>
              <p className="text-dark text-base lg:text-lg">
                We help brands to advertise on Web & Mobile medium. We help
                brands to select best medium with optimum module in order to
                maximize their ROI. Our experienced Media Buying & Planning team
                help brands to achieve their desired results through optimum
                inventory. We help brands of different verticals to choose best
                module with best medium to work on in order to acquire quality
                customers.
              </p>
              <p className="text-dark text-base lg:text-lg">
                Our Ad operations and development team help advertisers in
                optimizing the creatives and landing pages for the increase
                in-conversion rate
              </p>
              <Button
                variants={"primary"}
                text="Register"
                customClass={"w-fit mt-8"}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
