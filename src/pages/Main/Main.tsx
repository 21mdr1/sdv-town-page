import BulletinBoard from '../../components/BulletinBoard/BulletinBoard';
import Hero from '../../components/Hero/Hero';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import './Main.scss';

function Main() {
    return (
        <>
        <Hero />
        <main>
            <BulletinBoard />
            <PhotoGallery />
        </main>
        </>
    );
}

export default Main;