import './index.scss';
import checkIcon from '../../assets/check.svg';

function SkillItem({ name, level, check}) {
    return (
        <li className="skill-item">
            <span className="skill-name">{name}</span>
            {/* <div className="skill-level">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={`rectangle ${i < level ? 'filled' : ''}`}></div>
                ))}
            </div> */}
              {level !== undefined && (
                <div className="skill-level">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className={`rectangle ${i < level ? 'filled' : ''}`}></div>
                    ))}
                </div>
            )}
            {check !== undefined && check && (
                <img src={checkIcon} alt="Check" className="check-icon" />
            )}
        </li>
    );
}

export default SkillItem;