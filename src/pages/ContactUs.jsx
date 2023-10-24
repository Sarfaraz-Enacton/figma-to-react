import React from "react";
import { HeroSection } from "../components/HeroSection";
import { SubscribeSection } from "../components/SubscribeSection";
import { SectionHeader } from "../components/SectionHeader";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import ContactCard from "../components/ContactCard";
import FormInput from "../components/FormInput";
import { Button } from "../components/Button";
import FormTextArea from "../components/FormTextArea";

export const ContactUs = () => {
  return (
    <main>
      <HeroSection
        title={
          <>
            Let's <span className="text-secondary">Talk</span>
          </>
        }
        customClass={"bg-contact-hero"}
      />

      {/* get in touch section */}
      <section className="pt-14 md:pt-28">
        <div className="container space-y-14 pb-8">
          <SectionHeader variants={"vertical"} icon={"/images/our-team.png"}>
            <SectionHeader.Hint>Get In Touch</SectionHeader.Hint>
            <SectionHeader.Title>Get In Touch</SectionHeader.Title>
          </SectionHeader>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            <ContactCard
              badge={"Contact"}
              icon={<EnvelopeIcon className="h-7 w-7" />}
              title={"Email"}
              description={"business@growthan.com"}
            />
            <ContactCard
              badge={"Call"}
              icon={<PhoneIcon className="h-7 w-7" />}
              title={"Phone"}
              description={"+918617514085"}
            />
            <ContactCard
              badge={"Office"}
              icon={<MapPinIcon className="h-7 w-7" />}
              title={"Location"}
              description={
                "UNIT NO. 147, FIRST FLOOR, JMD MEGAPOLIS, Badshahpur Sohna Rd Hwy, Sector 48, Gurugram, Haryana 122018 ."
              }
            />
          </div>

          <div className="bg-section-gradient-2 p-8 sm:p-24">
            <form className="font-primary" action="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                <div className="space-y-3">
                  <label
                    className="text-xl text-primary font-semibold"
                    htmlFor="name"
                  >
                    Full name *
                  </label>
                  <FormInput
                    type={"text"}
                    placeholder={"John David"}
                    id={"name"}
                  />
                </div>

                <div className="space-y-3">
                  <label
                    className="text-xl text-primary font-semibold"
                    htmlFor="email"
                  >
                    Your email *
                  </label>
                  <FormInput
                    type={"email"}
                    placeholder={"example@yourmail.com"}
                    id={"email"}
                  />
                </div>

                <div className="space-y-3">
                  <label
                    className="text-xl text-primary font-semibold"
                    htmlFor="number"
                  >
                    Phone *
                  </label>
                  <FormInput
                    type={"tel"}
                    placeholder={"your Number here"}
                    id={"number"}
                  />
                </div>

                <div className="space-y-3">
                  <label
                    className="text-xl text-primary font-semibold"
                    htmlFor="subject"
                  >
                    Subject *
                  </label>
                  <FormInput
                    type={"text"}
                    placeholder={"How can we Help"}
                    id={"subject"}
                  />
                </div>

                <div className="space-y-3 md:col-span-2">
                  <label
                    className="text-xl text-primary font-semibold"
                    htmlFor="textarea"
                  >
                    Message *
                  </label>
                  <FormTextArea
                    id={"textarea"}
                    placeholder={
                      "Hello there, I would like to talk about how to..."
                    }
                  />
                </div>
              </div>
              <div className="mt-12">
                <Button
                  variants={"primary"}
                  text={"Sent Message"}
                  customClass={"mx-auto"}
                  role={"button"}
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* subscribe section */}
      <SubscribeSection />
    </main>
  );
};
