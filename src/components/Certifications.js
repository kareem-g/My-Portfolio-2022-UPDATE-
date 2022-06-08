import React from "react";
import CourseCard from "./CourseCard";
import Fade from "react-reveal/Fade";

const Certifications = (props) => {
  return (
    <>
      <div class="h-screen p-10 pt-32 mt-[35rem]">
        <h1 class="text-4xl text-[#FFF] font-black capitalize">
          Certifications
        </h1>
        <Fade bottom ccade>
          <div className="flex flex-row">
            <CourseCard
              name="sssssssssssssss"
              description="I've collaborated with Elao, a development agency, to design their
          new website based on their upcoming brand new identity."
            />
            <CourseCard
              name="sssssssssssssss"
              link="https://www.google.com"
              description="I've collaborated with Elao, a development agency, to design their
          new website based on their upcoming brand new identity."
            />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Certifications;
