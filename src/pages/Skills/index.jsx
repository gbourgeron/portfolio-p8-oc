import './index.scss';

function Skills() {
    return (
        <main>
            <h1 className="page-title">compétences</h1>
            <div className="box-skills">
                <div className="title-box">LANGAGES & TECHNOLOGIES</div>
                <div className="skills">
                    <div className="block-skills frontend">
                        <ul className='skill-list'>
                            <li>html</li>
                            <li>css / sass</li>
                            <li>javascript</li>
                            <li>react</li>
                        </ul>
                    </div>
                    <div className="block-skills backend">
                        <ul className='skill-list'>
                            <li>node.js</li>
                            <li>express</li>
                            <li>mongodb</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Skills;