import React, { useState } from "react";
import { MdOutlineOpenInNew } from "react-icons/md";

const ProjectCard = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <section className="flex flex-row w-[36rem] h-[16rem] mt-12">
        <div className="flex flex-col bg-[#252525] rounded-sm">
          <div className="flex flex-row">
            <span className="text-white m-4 font-black text-2xl">
              {props.number}
            </span>
            <span className="text-[#D9D9D9]/20 mt-2 font-black text-2xl">
              ___
            </span>
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row cursor-pointer text-white m-4 font-black text-2xl transition ease-in-out .5s hover:underline"
            >
              {props.name}
            </a>
          </div>
          <span className="text-[#A0AEC0] text-sm mt-8 w-[20rem] m-4">
            {props.description}
          </span>
        </div>

        <div className="flex flex-row-reverse justify-items-end rounded-sm bg-black/80 card-zoom w-[36rem] overflow-hidden">
          <div className="card-zoom-image">
            <img src={props.img} alt="" />
          </div>

          <span className="z-50 mt-4 p-1 text-center bg-black w-24 h-6 rounded-l-3xl text-white mr-[-.45rem] font-medium text-xs">
            <span className="pr-1">{props.type}</span>
          </span>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
