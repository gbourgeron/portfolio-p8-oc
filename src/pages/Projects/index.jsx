import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ProjectItem from '../../components/ProjectItem/index';
import projectsData from '../../data/projects.json';
import './index.scss';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        setProjects(sortProjects(projectsData, sortOrder));
    }, [sortOrder]);

    const sortProjects = (projects, order) => {
        return [...projects].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return order === 'asc' ? dateA - dateB : dateB - dateA;
        });
    };

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    };


    return (
        <main>
            <h1 className="page-title">projets</h1>
            <div className="filter-container">
                <button className="filter-button" onClick={toggleSortOrder}>
                    Trier par date: {sortOrder === 'asc' ? 'Les plus anciens' : 'Les plus récents'}
                </button>
            </div>
            <div className="projects-list">
                {projects.map(project => (
                    <ProjectItem
                        key={project.id}
                        name={project.name}
                        projectDescription={project.projectDescription}
                        workDescription={project.workDescription}
                        skillsDescription={project.skillsDescription}
                        date={project.date}
                        githubLink={project.githubLink}
                        siteLink={project.siteLink}
                        projectType={project.projectType}
                        workType={project.workType}
                        image={project.image}
                    />
                ))}
            </div>
            <Button to="/contact">Contactez-moi vite</Button>
        </main>
    );
}

export default Projects;
