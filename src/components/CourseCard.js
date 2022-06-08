import React from "react";

const CourseCard = (props) => {
  return (
    <>
      <section className="flex flex-row w-[36rem] h-[14rem] mt-12">
        <div className="flex flex-col bg-[#252525] rounded-md">
          <div className="flex flex-row">
            <span className="text-white m-4 font-black text-2xl">
              {props.name}
            </span>
            <span className="text-[#D9D9D9]/20 mt-2 font-black text-2xl">
              ___
            </span>
          </div>
          <span className="text-[#A0AEC0] text-sm mt-8 w-[20rem] m-4">
            {props.description}
          </span>
          <div className="flex justify-center">
            <button className="text-center bg-[#040404] rounded-xl w-28 h-6 mt-5">
              <a
                href={props.link}
                target="_blank"
                className="text-[#fff] text-sm capitalize"
              >
                link to course
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseCard;
