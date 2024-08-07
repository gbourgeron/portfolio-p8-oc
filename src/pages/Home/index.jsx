import Button from '../../components/Button';
import './index.scss';

function Home() {
    return (
        <main>
            <div className='titles'>
                <h2>GURVAN <span>BOURGERON</span></h2>
                <h1>DÉVELOPPEUR <span>WEB</span></h1>
            </div>
            <p className='text-presentation'>&lt; Autodidacte et passionné par les challenges, inspiré par n'importe quoi, mon objectif est d’accomplir les missions que vous me confierez,
si toutefois je l’accepte. /&gt;</p>
            <p className='text-presentation'>&lt; Tourné vers le front-end et le back-end, avec une appétence également pour le design et l'esthétique, je m'oriente naturellement vers le fullstack. /&gt;</p>
            <p className='text-presentation'>&lt; React, NextJS, Express, MongoDB. /&gt;</p>
            <Button to="/skills">Suis-je l'homme de la situation ?</Button>
        </main>
    );
}

export default Home;