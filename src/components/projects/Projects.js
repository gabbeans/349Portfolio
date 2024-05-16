import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Some of My Works and WIPS" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SpaceFrog"
          des="A simple game developed using Unity and C#. It's a 2D game where the player has to avoid obstacles and defeat enemies to level up."
          src={projectOne}
          githubLink="https://github.com/gabbeans/SpaceFrog"
        />
        <ProjectsCard
          title="Tic Tac Toe"
          des="Simple tic-tac-toe game using ReactJS. It's a simple game that can be played by two players."
          src={projectTwo}
          githubLink="https://github.com/gabbeans/TicTacHunt"
        />
        <ProjectsCard
          title="Chat App"
          des="A chat application using html and CSS. It's a work in progress project."
          src={projectThree}
          githubLink="https://github.com/gabbeans/Chatroom"
        />
      </div>
    </section>
  );
};

export default Projects;
