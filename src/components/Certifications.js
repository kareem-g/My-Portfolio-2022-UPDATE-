import React from "react";
import CourseCard from "./CourseCard";
import Fade from "react-reveal/Fade";

const Certifications = (props) => {
  return (
    <>
      <div
        // className="flex flex-col h-screen p-10 pt-32 mt-[35rem]"
        id="certifications"
        className="certifications"
      >
        <h1 class="text-4xl text-[#FFF] font-black capitalize">
          Certifications
        </h1>
        <Fade bottom ccade>
          <div
            // className="flex flex-row"
            className="certifications-items"
          >
            <CourseCard
              name="The Complete JavaScript"
              description="The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!"
              link="https://www.udemy.com/course/the-complete-javascript-course/"
            />
            <CourseCard
              name="Understanding TypeScript"
              description="Don't limit the Usage of TypeScript to Angular! Learn the Basics, its Features, Workflows and how to use it!"
              link="https://www.udemy.com/course/understanding-typescript/https://www.udemy.com/course/understanding-typescript/"
            />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Certifications;
