import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <section className="flex flex-row w-[36rem] h-[14rem] mt-12">
        <div className="flex flex-col bg-[#252525] rounded-sm">
          <div className="flex flex-row">
            <span className="text-white m-4 font-black text-2xl">
              {props.number}
            </span>
            <span className="text-[#D9D9D9]/20 mt-2 font-black text-2xl">
              ___
            </span>
            <span className="text-white m-4 font-black text-2xl">
              {props.name}
            </span>
          </div>
          <span className="text-[#A0AEC0] text-sm mt-8 w-[20rem] m-4">
            {props.description}
          </span>
        </div>

        <div className="flex flex-row-reverse justify-items-end rounded-sm bg-[#D9D9D9]/40 w-[36rem] overflow-hidden">
          <span className="text-center mt-4 bg-black w-24 h-6 rounded-l-3xl text-white mr-[-.45rem] font-black text-sm">
            <span className="pr-1">{props.type}</span>
          </span>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
