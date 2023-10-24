import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-light pt-24 pb-16">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 sm:gap-8 pb-10 sm:pb-14 border-b-[0.5px] border-light">
          <div className="col-span-5 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold pb-4 sm:pb-7">
              Pages
            </h4>
            <ul className="text-base sm:text-lg space-y-3 font-secondary">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-7 sm:col-span-3 lg:col-span-3 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold pb-4 sm:pb-7">
              Social Logins
            </h4>
            <ul className="text-base sm:text-lg space-y-3 font-secondary">
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Skype</a>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-4 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold pb-4 sm:pb-7">
              location
            </h4>
            <p className="text-base sm:text-lg pb-4 sm:pb-7 max-w-md mx-auto underline">
              <a href="">
                UNIT NO. 147, FIRST FLOOR, JMD MEGAPOLIS, Badshahpur Sohna Rd
                Hwy, Sector 48, Gurugram, Haryana 122018 .
              </a>
            </p>
            <p className="text-base sm:text-lg underline pb-4 sm:pb-7">
              <a href="">Location Map</a>
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold pb-4 sm:pb-7">
              Get in touch with
            </h4>
            <a
              href="tel:+918617514085"
              className="block w-fit mx-auto lg:mx-0 px-7 py-[14px] bg-dark rounded-lg text-lg xl:text-2xl font-bold mb-4 sm:mb-7"
            >
              +91 8617514085
            </a>
            <p className="text-base sm:text-lg underline">
              <a href="mailto:business@growthan.com">business@growthan.com</a>
            </p>
          </div>
        </div>
        <div className="text-center pt-6">
          <p className="text-sm sm:text-lg">
            Copyright © 2023| Growthan | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
