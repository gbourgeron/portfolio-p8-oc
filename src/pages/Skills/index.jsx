import React, { useEffect, useState } from 'react';
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
                    <div className="block-skills frontend">
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
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Skills;