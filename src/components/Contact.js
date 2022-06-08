import React from "react";

import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <>
      <div class="flex flex-col h-screen p-10 ">
        <h3 className="text-[#A0AEC0] mb-8">Contact</h3>
        <h1 class="text-4xl text-[#FFF] font-black capitalize">
          Interested ? <br /> Lets Get In Touch !
        </h1>
        <span className="text-[#A0AEC0] mt-8">
          Feel free to message me on any of my social media or shoot me an
          email.
        </span>
        <Fade top cascade>
          <div className="text-[#A0AEC0] flex flex-col mt-12">
            <span className="flex flex-row pt-4">
              <IoLogoWhatsapp color="#9DECF9" size="24px" />
              <span className="ml-2">+20 0122 785 6163</span>
            </span>
            <span className="flex -lex-row pt-4">
              <IoLogoLinkedin color="#9DECF9" size="24px" />
              <span className="ml-2">@kareemgameel</span>
            </span>
            <span className="flex flex-row pt-4">
              <MdAlternateEmail color="#9DECF9" size="24px" />
              <span className="ml-2">kareemgameel2051@gmail.com</span>
            </span>
            <span className="flex flex-row pt-4">
              <IoLogoGithub color="#9DECF9" size="24px" />
              <a
                href="https://www.github.com/kareem-g"
                target="_blank"
                rel="noreferrer"
                className="ml-2 hover:underline transition ease-in-out delay-150s"
              >
                https://www.github.com/kareem-g
              </a>
            </span>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Contact;
