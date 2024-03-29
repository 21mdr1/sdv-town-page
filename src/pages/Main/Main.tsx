import BulletinBoard from '../../components/BulletinBoard/BulletinBoard';
import Hero from '../../components/Hero/Hero';
import './Main.scss';

function Main() {
    return (
        <>
        <Hero />
        <main>
            <BulletinBoard />
        </main>
        </>
    );
}

export default Main;