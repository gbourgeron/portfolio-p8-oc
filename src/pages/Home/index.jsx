import Button from '../../components/Button';
import './index.scss';

function Home() {
    return (
        <main>
            <div className='titles'>
                <h2>GURVAN BOURGERON</h2>
                <h1>DÉVELOPPEUR WEB</h1>
            </div>
            <p className='text-presentation'>&lt;Autodidacte et passionné par les challenges, mon objectif est d’accomplir les missions que vous me confierez,
si toutefois je l’accepte. /&gt;</p>
            <Button to="/skills">Suis-je l'homme pour votre mission ?</Button>
        </main>
    );
}

export default Home;