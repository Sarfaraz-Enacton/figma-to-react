import React from "react";

export const SubscribeSection = () => {
  return (
    <section className="bg-subscribe bg-no-repeat bg-cover bg-center py-20 md:py-40">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[790px] w-fit mx-auto gap-6 md:gap-16">
          <div className="flex sm:items-center sm:justify-center">
            <h3 className="text-2xl md:text-5xl text-light font-semibold mr-4">
              100<span className="text-blue">+</span>
            </h3>
            <p className="text-base md:text-lg text-gray-200 uppercase">
              happy clients
            </p>
          </div>

          <div className="flex sm:items-center sm:justify-center">
            <h3 className="text-2xl md:text-5xl text-light font-semibold mr-4">
              500<span className="text-red">+</span>
            </h3>
            <p className="text-base md:text-lg text-gray-200 uppercase">
              publishers
            </p>
          </div>

          <div className="flex sm:items-center sm:justify-center">
            <h3 className="text-2xl md:text-5xl text-light font-semibold mr-4">
              25000<span className="text-yellow">+</span>
            </h3>
            <p className="text-base md:text-lg text-gray-200 uppercase">
              daily <br />
              conversions
            </p>
          </div>

          <div className="flex sm:items-center sm:justify-center">
            <h3 className="text-2xl md:text-5xl text-light font-semibold mr-4">
              150<span className="text-green">+</span>
            </h3>
            <p className="text-base md:text-lg text-gray-200 uppercase">
              campaigns <br />
              delivered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
