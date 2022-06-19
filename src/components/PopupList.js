import React from "react";
import {
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMaterialui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

import { AiOutlineMobile } from "react-icons/ai";
import { FiTerminal } from "react-icons/fi";
import Fade from "react-reveal/Fade";

const PopupList = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Fade bottom>
        <FiTerminal color="#9DECF9" size="24px" />
        <button
          className="outline-none focus:outline-none ease-linear transition-all duration-150 text-[#9DECF9] underline ml-2"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {/* See My Full Stack */}
          My Stack Array
        </button>
      </Fade>

      {showModal ? (
        <>
          <Fade right cascade>
            <div className="mb-24 md:justify-center items-center flex overflow-x-hidden overflow-y-auto overscroll-none fixed inset-0 z-50 outline-none focus:outline-none ">
              <div className="relative w-[27rem] my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="rounded-lg relative flex flex-col w-full bg-[#2D3748] outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 pb-0 text-white ">
                    <h3 className="text-xl font-semibold capitalize">
                      Full Stack list
                    </h3>
                    {/* close btn */}
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-white float-right leading-none font-medium outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white h-6 w-6 text-xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 pt-4 flex-auto">
                    <p className="my-2 mb-2 text-[#A0AEC0] text-md font-medium leading-relaxed">
                      Core Languages
                    </p>
                    {/* langs */}
                    <span className="mt-4 grid grid-cols-2 font-small gap-4 font-light text-sm">
                      <span className="flex flex-row ml-1 mt-1">
                        <SiTypescript color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">
                          TypeScript (in Progress)
                        </span>
                      </span>

                      <span className="flex flex-row ml-1 mt-1">
                        <SiJavascript color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">
                          JavaScript (Es6)
                        </span>
                      </span>

                      <span className="flex flex-row ml-1 mt-1">
                        <SiCplusplus color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">
                          C++ (Basics)
                        </span>
                      </span>
                    </span>
                  </div>

                  {/* FrameWorks */}

                  <div className="relative p-6 pt-0 flex-auto">
                    <p className="my-2 mb-2 text-[#A0AEC0] text-md font-medium leading-relaxed">
                      Frameworks & Technologies
                    </p>
                    {/* langs */}
                    <span className="mt-4 grid grid-cols-2 font-small gap-4 font-light text-sm">
                      <span className="flex flex-row ml-1 mt-1">
                        <SiReact color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">React</span>
                      </span>

                      <span className="flex flex-row ml-1 mt-1">
                        <SiRedux color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">Redux tk</span>
                      </span>

                      <span className="flex flex-row ml-1 mt-1">
                        <SiNextdotjs color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">Nextjs</span>
                      </span>

                      <span className="flex flex-row ml-1 mt-1">
                        <SiFirebase color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">Firebase</span>
                      </span>
                      {/* 
                    <span className="flex flex-row ml-1 mt-1">
                      <SiExpress color="#9DECF9" size="24px" />
                      <span className="ml-2 mt-1 text-white">Express</span>
                    </span>

                    <span className="flex flex-row ml-1 mt-1">
                      <SiNodedotjs color="#9DECF9" size="24px" />
                      <span className="ml-2 mt-1 text-white">Node.js</span>
                    </span> */}
                    </span>
                  </div>

                  {/* Styling Libraries */}
                  <div className="relative p-6 pt-0 flex-auto">
                    <p className="my-2 mb-2 text-[#A0AEC0] text-md font-medium leading-relaxed">
                      Styling Libraries
                    </p>
                    {/* langs */}
                    <span className="mt-4 grid grid-cols-2 font-small gap-4 font-light text-sm">
                      <span className="flex flex-row ml-1 mt-1">
                        <SiTailwindcss color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">
                          Tailwindcss
                        </span>
                      </span>

                      <span className="flex flex-row ml-1 mt-1">
                        <SiStyledcomponents color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">
                          Styled Components
                        </span>
                      </span>

                      <span className="flex flex-row ml-1 mt-1">
                        <SiSass color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">Scss</span>
                      </span>

                      <span className="flex flex-row ml-1 mt-1">
                        <SiMaterialui color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">MUI Core</span>
                      </span>

                      <span className="flex flex-row ml-1 mt-1">
                        <AiOutlineMobile color="#9DECF9" size="24px" />
                        <span className="ml-2 mt-1 text-white">
                          Responsive Design
                        </span>
                      </span>
                    </span>
                  </div>
                  {/*footer*/}

                  {/* Tools */}
                  {/* <div className="relative p-6 pt-0 flex-auto">
                  <p className="my-2 mb-2 text-[#A0AEC0] text-md font-medium leading-relaxed">
                    Tools
                  </p>
                  <span className="mt-4 grid grid-cols-2 font-small gap-4 font-light text-sm">
                    <span className="flex flex-row ml-1 mt-1">
                      <SiGit color="#9DECF9" size="24px" />
                      <span className="ml-2 mt-1 text-white">Git</span>
                    </span>

                    <span className="flex flex-row ml-1 mt-1">
                      <SiVisualstudiocode color="#9DECF9" size="24px" />
                      <span className="ml-2 mt-1 text-white">VScode</span>
                    </span>

                    <span className="flex flex-row ml-1 mt-1">
                      <SiSass color="#9DECF9" size="24px" />
                      <span className="ml-2 mt-1 text-white">Scss</span>
                    </span>

                    <span className="flex flex-row ml-1 mt-1">
                      <SiMaterialui color="#9DECF9" size="24px" />
                      <span className="ml-2 mt-1 text-white">MUI Core</span>
                    </span>
                  </span>
                </div> */}

                  <div className="flex items-center justify-end pt-2">
                    <span className="text-[#A0AEC0] text-xs font-normal m-4">
                      *Some micro Technologies not included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          {/* bg */}

          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default PopupList;
