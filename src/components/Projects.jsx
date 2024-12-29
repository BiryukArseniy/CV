import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Мои проекты</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
