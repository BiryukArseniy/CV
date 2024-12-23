import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <div>
            <h1>My Projects</h1>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

export default Projects;
