import React from "react";
import Project from "./Project";
import shopCo from "../assets/images/shopCoEcom.png";
import quickit from "../assets/images/quickit.png";
import netflix from "../assets/images/netflixCloneApp.png";
import myProjects from "../assets/backgrounds/myProjects.png";
import "../styles/components/projects.css";

function Projects() {
  return (
    <div id="projects" className="projects-section pt-5">
      <img
        src={myProjects}
        alt="My Projects Background"
        className="mt-5 position-absolute"
        draggable="false"
      />
      <h3 className="text-center text-white fs-2 text-capitalize">
        Latest projects
      </h3>
      <div className="projects d-flex flex-column gap-5">
        <Project
          img={quickit}
          description="Quickit AI Dashboard website"
          link="https://quickit.netlify.app"
        />
        <Project img={netflix} description="Netflix Clone App " />
        <Project img={shopCo} description="Shop.co E-commerce website" />
        <Project
          addText={true}
          title="Have any project in mind?"
          text="I'm available frelancing!"
          description="Shop.co E-commerce website"
        />
      </div>
    </div>
  );
}

export default Projects;
