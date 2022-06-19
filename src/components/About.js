import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import PopupList from "./PopupList";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <div
        // className="flex flex-row h-screen p-4 mt-6"
        id="about"
        className="about"
      >
        <div className="w-3/5 flex flex-col">
          <h1 class="text-3xl text-[#FFF] font-black uppercase tracking-wide">
            <span className="text-4xl">W</span>hat i Do.
          </h1>
          <Fade bottom>
            <span className="mt-10 text-[#A0AEC0] font-normal text-sm leading-relaxed tracking-normal">
              I'm a Front end Developer, I'm always up to learn new technologies{" "}
              <br />
              to improve myself and get more experience <br />
              for Extremely Fast, High-quality & Best performance Websites.
            </span>
          </Fade>
          <span className="mt-10 text-[#A0AEC0] text-sm font-bold leading-relaxed tracking-normal ">
            Languages and Technologies that i use
          </span>
          <Fade right cascade>
            <div className="mt-4 grid grid-cols-2 font-small gap-4">
              <span className="flex flex-row ml-1 mt-1">
                <SiTypescript color="#9DECF9" size="32px" />
                <span className="ml-2 mt-1 text-white">TypeScript</span>
              </span>

              <span className="flex flex-row ml-1 mt-1">
                <SiReact color="#9DECF9" size="32px" />
                <span className="ml-2 mt-1 text-white">React</span>
              </span>

              <span className="flex flex-row ml-1 mt-1">
                <SiJavascript color="#9DECF9" size="32px" />
                <span className="ml-2 mt-1 text-white">JavaScript</span>
              </span>

              <span className="flex flex-row ml-1 mt-1">
                <SiNextdotjs color="#9DECF9" size="32px" />
                <span className="ml-2 mt-1 text-white">Nextjs</span>
              </span>
            </div>
          </Fade>
          <span className="flex flex-row mt-8 ">
            {/* <FiTerminal color="#9DECF9" size="24px" />
            <button href="#list" className="text-[#9DECF9] underline ml-2">
              See My Full Stack
            </button> */}
            <PopupList />
          </span>
        </div>
        <Fade bottom>
          <div className="w-2/5 pl-6">
            <img
              src={require("./images/kareem.png")}
              alt="me"
              // className="mx-auto rounded-full"
              className="img"
            />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default About;
