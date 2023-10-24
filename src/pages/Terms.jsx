import React from "react";
import { HeroSection } from "../components/HeroSection";

export default function Terms() {
  return (
    <main>
      <HeroSection title={"Terms of Use"} customClass={"bg-contact-hero"} />

      {/* terms and condition section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="bg-term-gradient py-12 md:py-24 px-4 sm:px-12 lg:px-20 rounded-lg">
            <h2 className="text-primary font-semibold text-3xl md:text-5xl pb-7">
              Terms and Privacy Policy
            </h2>
            <ul className="text-dark text-sm md:text-lg list-disc pl-8">
              <li>
                <p>Terms of Use for Growthan Media Private Limited:</p>
              </li>
              <li>
                <p>
                  Welcome to Growthan Media Private Limited ("we", "our", or
                  "us") website. These terms of use ("Terms") apply to the use
                  of our website located at 147, FIRST FLOOR, JMD MEGAPOLIS,
                  Badshahpur Sohna Rd Hwy, Sector 48, Gurugram, Haryana 122018,
                  INDIA, and all related websites, applications, services, and
                  tools regardless of how you access or use them.
                </p>
              </li>
              <li>
                <p>
                  By accessing or using our website, you agree to be bound by
                  these Terms. If you do not agree to these Terms, please do not
                  access or use our website.
                </p>
              </li>
            </ul>
            <ul className="text-dark text-sm md:text-lg list-decimal pl-8">
              <li>
                <p>
                  Use of Our Website: Our website is intended for your personal,
                  non-commercial use only. You may not modify, reproduce,
                  distribute, transmit, display, publish, or create derivative
                  works from any content or material on our website for any
                  commercial purpose without our express written consent. You
                  may use our website only for lawful purposes and in accordance
                  with these Terms.
                </p>
              </li>
              <li>
                <p>
                  Intellectual Property: The content on our website, including
                  without limitation, the text, graphics, logos, images, and
                  software, is owned by or licensed to us, and is protected by
                  Indian and international copyright, trademark, patent, trade
                  secret, and other intellectual property or proprietary rights
                  laws. You may not use, reproduce, distribute, transmit,
                  display, publish, or create derivative works from any content
                  or material on our website without our express written
                  consent.
                </p>
              </li>
              <li>
                <p>
                  User Content: Our website may allow you to upload, submit,
                  store, send, or receive content. By uploading, submitting,
                  storing, sending, or receiving any content, you grant us a
                  non-exclusive, worldwide, royalty-free, perpetual,
                  irrevocable, and fully sub-licensable right to use, reproduce,
                  modify, adapt, publish, translate, create derivative works
                  from, distribute, perform, and display such content in any
                  form, media, or technology now known or later developed.
                </p>
              </li>
              <li>
                <p>
                  Links to Third-Party Websites: Our website may contain links
                  to third-party websites that are not owned or controlled by
                  us. We are not responsible for the content or privacy policies
                  of such third-party websites.
                </p>
              </li>
              <li>
                <p>
                  Limitation of Liability: We will not be liable for any damages
                  of any kind arising from the use of our website, including but
                  not limited to direct, indirect, incidental, punitive, and
                  consequential damages
                </p>
              </li>
              <li>
                <p>
                  Indemnification: You agree to indemnify and hold us harmless
                  from any claims, damages, liabilities, costs, or expenses
                  arising from your use of our website.
                </p>
              </li>
              <li>
                <p>
                  Disclaimer of Warranties: Our website is provided on an
                  &quot;as is&quot; and &quot;as available&quot; basis. We make
                  no warranties or representations of any kind, express or
                  implied, as to the operation of our website or the
                  information, content, materials, or products included on our
                  website
                </p>
              </li>
              <li>
                <p>
                  Governing Law: These Terms and your use of our website will be
                  governed by and construed in accordance with the laws of
                  India.
                </p>
              </li>
              <li>
                <p>
                  Modification of Terms: We may modify these Terms at any time,
                  and your continued use of our website after any such
                  modifications will constitute your acceptance of such
                  modifications.
                </p>
              </li>
              <li>
                <p>
                  Contact Us: If you have any questions about these Terms or our
                  website, please contact us at{" "}
                  <a className="underline" href="mailto:legal@growthan.com">
                    legal@growthan.com
                  </a>{" "}
                  or call us at{" "}
                  <a className="legal@growthan.com" href="tel:+918617514085">
                    8617514085
                  </a>
                  .
                </p>
              </li>
              <li className="list-disc">
                <p>Thank you for choosing Growthan Media Private Limited!</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
