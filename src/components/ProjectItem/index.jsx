import React from 'react';
import './index.scss';
import { formatDate } from '../../utils/date';
import gitHubLogo from '../../assets/github.svg';
import wwwLogo from '../../assets/www.svg';

function ProjectItem({ name, projectDescription, workDescription, date, githubLink, siteLink, projectType, workType, image }) {
    console.log("Chemin d'accès à l'image :", image);
    return (
        <div className="project-item">
            <div className='project-infos'>
                <div className='infos-1'>
                    <h2 className="project-name">{name}</h2>
                    <div className="work-type">
                        {workType.map((type, index) => (
                            <span key={index} className="work-type-item">{type}</span>
                        ))}
                    </div>
                    <div className="project-links">
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <img className='rounded-link' src={ gitHubLogo } alt='' />
                            </a>
                        )}  
                        {siteLink && (
                            <a href={siteLink} target="_blank" rel="noopener noreferrer">
                                <img className='rounded-link' src={ wwwLogo } alt='' />
                            </a>
                        )}
                    </div>
                </div>
                <div className='infos-2'>
                    <p className="project-type">{projectType}</p>
                    <p className="project-date">{formatDate(date)}</p>
                </div>
            </div>
            <div className='description'>
                <p className="project-description"><span className='intro-description'>Le projet : </span>{projectDescription}</p>
                <p className="work-description"><span className='intro-description'> Ma mission : </span>{workDescription}</p>
            </div>
            <img className='project-image' src={image} alt="" />
        </div>
    );
}

export default ProjectItem;
