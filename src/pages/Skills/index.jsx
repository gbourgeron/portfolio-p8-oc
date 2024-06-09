import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import SkillItem from '../../components/SkillItem';
import skillsData from '../../data/skills.json';
import './index.scss';

function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(skillsData);
    }, []);

    return (
        <main>
            <h1 className="page-title">compétences</h1>
            <div className="box-skills">
                <div className="title-box">LANGAGES & TECHNOLOGIES</div>
                <div className="skills">
                    {/* <div className="block-skills frontend">
                        <ul className='skill-list'>
                            {skills.slice(0, 4).map(skill => (
                                    <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                                ))}
                        </ul>
                    </div>
                    <div className="block-skills backend">
                        <ul className='skill-list'>
                            {skills.slice(4).map(skill => (
                                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </ul>
                    </div> */}
                    <div className="block-skills">
                        <ul className="skill-list">
                            {skills.languages && skills.languages.map(skill => (
                                <SkillItem key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box-skills">
                <div className="title-box">OUTILS</div>
                <div className="skills">
                    <div className="block-skills">
                        <ul className="skill-list">
                            {skills.tools && skills.tools.map(tool => (
                                <SkillItem key={tool.name} name={tool.name} check={tool.check} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box-skills">
                <div className="title-box">GESTION DE PROJET</div>
                <div className="skills">
                    <div className="block-skills">
                        <ul className="skill-list">
                            {skills.projectManagement && skills.projectManagement.map(tool => (
                                <SkillItem key={tool.name} name={tool.name} check={tool.check} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box-skills">
                <div className="title-box">SOFT SKILLS</div>
                <div className="skills">
                    <div className="block-skills">
                        <ul className="skill-list">
                            {skills.softSkills && skills.softSkills.map(tool => (
                                <SkillItem key={tool.name} name={tool.name} check={tool.check} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Button to="/projects">Découvrez mes précédentes missions</Button>
        </main>
    );
}

export default Skills;