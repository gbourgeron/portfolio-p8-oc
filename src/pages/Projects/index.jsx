import React, { useEffect, useState } from 'react';
import ProjectItem from '../../components/ProjectItem/index';
import projectsData from '../../data/projects.json';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <main>
            <h1 className="page-title">projets</h1>
            <div className="projects-list">
                {projects.map(project => (
                    <ProjectItem
                        key={project.id}
                        name={project.name}
                        projectDescription={project.projectDescription}
                        workDescription={project.workDescription}
                        date={project.date}
                        githubLink={project.githubLink}
                        siteLink={project.siteLink}
                        projectType={project.projectType}
                        workType={project.workType}
                        image={project.image}
                    />
                ))}
            </div>
        </main>
    );
}

export default Projects;
