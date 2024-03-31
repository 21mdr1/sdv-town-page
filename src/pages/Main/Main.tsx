import Hero from '../../components/Hero/Hero';
import BulletinBoard from '../../components/BulletinBoard/BulletinBoard';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import FromTheTown from '../../components/FromTheTown/FromTheTown';
import './Main.scss';

function Main() {
    return (
        <main className="main">
            <BulletinBoard />
            <PhotoGallery />
            <FromTheTown />
        </main>
    );
}

export default Main;