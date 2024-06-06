import './index.scss';

function SkillItem({ name, level}) {
    return (
        <li className="skill-item">
            <span className="skill-name">{name}</span>
            <div className="skill-level">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={`rectangle ${i < level ? 'filled' : ''}`}></div>
                ))}
            </div>
        </li>
    );
}

export default SkillItem;