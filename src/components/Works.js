import React from "react";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";

const Works = () => {
  return (
    <>
      <div class="h-screen p-10">
        <h1 class="text-4xl text-[#FFF] font-black capitalize">
          Case Studies & Projects
        </h1>
        <Fade top>
          <ProjectCard
            name="hey"
            number="01"
            type="Coming Soon"
            description="I've collaborated with Elao, a development agency, to design their
            new website based on their upcoming brand new identity."
          />
          <ProjectCard
            name="hey"
            number="01"
            type="Coming Soon"
            description="I've collaborated with Elao, a development agency, to design their
            new website based on their upcoming brand new identity."
          />
          <ProjectCard
            name="hey"
            number="01"
            type="Coming Soon"
            description="I've collaborated with Elao, a development agency, to design their
            new website based on their upcoming brand new identity."
          />
          <ProjectCard
            name="hey"
            number="01"
            type="Coming Soon"
            description="I've collaborated with Elao, a development agency, to design their
            new website based on their upcoming brand new identity."
          />
        </Fade>
      </div>
    </>
  );
};

export default Works;
