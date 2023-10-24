import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { SectionHeader } from "./SectionHeader";
export const TestimonialSwiper = () => {
  const swiper = useSwiper();
  const swiperRef = useRef(null);
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex justify-between gap-4">
          <SectionHeader
            icon={"/images/testimonial.png"}
            variants={"horizontal"}
            customClass={"max-w-[700px]"}
          >
            <SectionHeader.Hint> Testimonial</SectionHeader.Hint>
            <SectionHeader.Title>
              We work with customers across all industries
            </SectionHeader.Title>
          </SectionHeader>
          <div className="gap-5 hidden sm:flex">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[70px] h-[70px] bg-primary rounded-full flex justify-center items-center border-[1px] shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-light w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-[70px] h-[70px] bg-light rounded-full flex justify-center items-center border-[1px] border-primary shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-primary w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          className="my-11"
          spaceBetween={26}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="bg-gradient-to-br from-pink-light to-primary-100 px-6 py-8 rounded-lg flex flex-col gap-8">
              <div className="bg-light py-6 sm:py-12 px-4 sm:px-8 shadow-sm rounded-lg">
                <div className="flex justify-between gap-4 pb-5 border-b-[1px] border-gray-100">
                  <div className="flex space-x-1 flex-shrink-0">
                    <div className="max-h-[25px] sm:max-h-[33px]">
                      <img
                        className="h-full w-auto"
                        src="/images/test-logo-1.png"
                        alt="review-logo"
                      />
                    </div>
                    <h5 className="text-primary text-2xl font-bold">Company</h5>
                  </div>
                  <div className="max-h-[33px]">
                    <img className="w-full" src="/images/star.png" alt="" />
                  </div>
                </div>
                <p className="text-dark text-base sm:text-lg pt-5">
                  Working with growthan.com has been a game-changer for our
                  business. Their strategies have led to significant growth and
                  a boost in revenue.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="max-h-[55px] rounded-full overflow-hidden">
                  <img src="/images/testimonial-1.png" alt="" />
                </div>
                <div className="">
                  <h6 className="text-primary text-xl font-bold">
                    John Carter
                  </h6>
                  <p className="text-lg text-dark">Marketing Lead at Google</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-br from-pink-light to-primary-100 px-6 py-8 rounded-lg flex flex-col gap-8">
              <div className="bg-light py-6 sm:py-12 px-4 sm:px-8 shadow-sm rounded-lg">
                <div className="flex justify-between gap-4 pb-5 border-b-[1px] border-gray-100">
                  <div className="flex">
                    <div className="max-h-[35px]">
                      <img src="/images/test-logo-2.png" alt="review-logo" />
                    </div>
                    <h5 className="text-primary text-2xl font-bold">Company</h5>
                  </div>
                  <div className="max-h-[35px]">
                    <img src="/images/star.png" alt="" />
                  </div>
                </div>
                <p className="text-dark text-base sm:text-lg pt-5">
                  I'm extremely impressed with the level of expertise and
                  dedication that the team at Growthan brings to every project.
                  They consistently deliver great results.{" "}
                </p>
              </div>
              <div className="flex gap-3">
                <div className="max-h-[55px] rounded-full overflow-hidden">
                  <img src="/images/testimonial-2.png" alt="" />
                </div>
                <div className="">
                  <h6 className="text-primary text-xl font-bold">
                    Peeter Pawl
                  </h6>
                  <p className="text-lg text-dark">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-br from-pink-light to-primary-100 px-6 py-8 rounded-lg flex flex-col gap-8">
              <div className="bg-light py-6 sm:py-12 px-4 sm:px-8 shadow-sm rounded-lg">
                <div className="flex justify-between gap-4 pb-5 border-b-[1px] border-gray-100">
                  <div className="flex">
                    <div className="max-h-[35px]">
                      <img src="/images/test-logo-1.png" alt="review-logo" />
                    </div>
                    <h5 className="text-primary text-2xl font-bold">Company</h5>
                  </div>
                  <div className="max-h-[35px]">
                    <img src="/images/star.png" alt="" />
                  </div>
                </div>
                <p className="text-dark text-base sm:text-lg pt-5">
                  Working with growthan.com has been a game-changer for our
                  business. Their strategies have led to significant growth and
                  a boost in revenue.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="max-h-[55px] rounded-full overflow-hidden">
                  <img src="/images/testimonial-1.png" alt="" />
                </div>
                <div className="">
                  <h6 className="text-primary text-xl font-bold">
                    John Carter
                  </h6>
                  <p className="text-lg text-dark">Marketing Lead at Google</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-br from-pink-light to-primary-100 px-6 py-8 rounded-lg flex flex-col gap-8">
              <div className="bg-light py-6 sm:py-12 px-4 sm:px-8 shadow-sm rounded-lg">
                <div className="flex justify-between gap-4 pb-5 border-b-[1px] border-gray-100">
                  <div className="flex">
                    <div className="max-h-[35px]">
                      <img src="/images/test-logo-2.png" alt="review-logo" />
                    </div>
                    <h5 className="text-primary text-2xl font-bold">Company</h5>
                  </div>
                  <div className="max-h-[35px]">
                    <img src="/images/star.png" alt="" />
                  </div>
                </div>
                <p className="text-dark text-base sm:text-lg pt-5">
                  I'm extremely impressed with the level of expertise and
                  dedication that the team at Growthan brings to every project.
                  They consistently deliver great results.{" "}
                </p>
              </div>
              <div className="flex gap-3">
                <div className="max-h-[55px] rounded-full overflow-hidden">
                  <img src="/images/testimonial-2.png" alt="" />
                </div>
                <div className="">
                  <h6 className="text-primary text-xl font-bold">
                    Peeter Pawl
                  </h6>
                  <p className="text-lg text-dark">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-br from-pink-light to-primary-100 px-6 py-8 rounded-lg flex flex-col gap-8">
              <div className="bg-light py-6 sm:py-12 px-4 sm:px-8 shadow-sm rounded-lg">
                <div className="flex justify-between gap-4 pb-5 border-b-[1px] border-gray-100">
                  <div className="flex">
                    <div className="max-h-[35px]">
                      <img src="/images/test-logo-1.png" alt="review-logo" />
                    </div>
                    <h5 className="text-primary text-2xl font-bold">Company</h5>
                  </div>
                  <div className="max-h-[35px]">
                    <img src="/images/star.png" alt="" />
                  </div>
                </div>
                <p className="text-dark text-base sm:text-lg pt-5">
                  Working with growthan.com has been a game-changer for our
                  business. Their strategies have led to significant growth and
                  a boost in revenue.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="max-h-[55px] rounded-full overflow-hidden">
                  <img src="/images/testimonial-1.png" alt="" />
                </div>
                <div className="">
                  <h6 className="text-primary text-xl font-bold">
                    John Carter
                  </h6>
                  <p className="text-lg text-dark">Marketing Lead at Google</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-br from-pink-light to-primary-100 px-6 py-8 rounded-lg flex flex-col gap-8">
              <div className="bg-light py-6 sm:py-12 px-4 sm:px-8 shadow-sm rounded-lg">
                <div className="flex justify-between gap-4 pb-5 border-b-[1px] border-gray-100">
                  <div className="flex">
                    <div className="max-h-[35px]">
                      <img src="/images/test-logo-2.png" alt="review-logo" />
                    </div>
                    <h5 className="text-primary text-2xl font-bold">Company</h5>
                  </div>
                  <div className="max-h-[35px]">
                    <img src="/images/star.png" alt="" />
                  </div>
                </div>
                <p className="text-dark text-base sm:text-lg pt-5">
                  I'm extremely impressed with the level of expertise and
                  dedication that the team at Growthan brings to every project.
                  They consistently deliver great results.{" "}
                </p>
              </div>
              <div className="flex gap-3">
                <div className="max-h-[55px] rounded-full overflow-hidden">
                  <img src="/images/testimonial-2.png" alt="" />
                </div>
                <div className="">
                  <h6 className="text-primary text-xl font-bold">
                    Peeter Pawl
                  </h6>
                  <p className="text-lg text-dark">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
