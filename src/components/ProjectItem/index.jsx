import React from 'react';
import './index.scss';
import { formatDate } from '../../utils/date';
import gitHubLogo from '../../assets/github.svg'

function ProjectItem({ name, projectDescription, workDescription, date, githubLink, siteLink, projectType, workType, image }) {
    return (
        <div className="project-item">
            <div className='project-infos'>
                <div className='infos-1'>
                    <h2 className="project-name">{name}</h2>
                    <p className="work-type">{workType}</p>
                    <div className="project-links">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer"><img className='rounded-link' src={ gitHubLogo } alt='' /></a>
                        <a href={siteLink} target="_blank" rel="noopener noreferrer">Live Site</a>
                    </div>
                </div>
                <div className='infos-2'>
                    <p className="project-type">{projectType}</p>
                    <p className="project-date">{formatDate(date)}</p>
                </div>
            </div>
            <div className='description'>
                <p className="project-description">{projectDescription}</p>
                <p className="work-description">{workDescription}</p>
            </div>
            <img src="{ image }" alt="" />
        </div>
    );
}

export default ProjectItem;
