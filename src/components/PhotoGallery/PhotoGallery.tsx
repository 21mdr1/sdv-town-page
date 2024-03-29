import photo1 from '../../assets/images/300px-Feast_of_the_Winterstar_Secret_Santa.png';
import photo2 from '../../assets/images/300px-StardewValleyTroutDerby.png';
import photo3 from '../../assets/images/300px-StardewValleyFair.png';
import photo4 from '../../assets/images/300px-Flower_Festival.jpg';
import photo5 from '../../assets/images/300px-Desert_Festival.png';
import photo6 from '../../assets/images/300px-Festival_of_Ice_2.jpg';
import photo7 from '../../assets/images/300px-Spirits_Eve.png';
import photo8 from '../../assets/images/300px-NightMarket.jpg';
import photo9 from '../../assets/images/300px-Luau.png';
import './PhotoGallery.scss';

function PhotoGallery() {
    return (
        <section className="gallery">
            <h2 className="gallery__title">Photo Gallery</h2>
            <div className="gallery__image-container">
                <img src={photo1} alt="Feast of the Winterstar Secret Santa" className="gallery__image" />
                <img src={photo2} alt="Trout Derby" className="gallery__image" />
                <img src={photo3} alt="Stardew Valley Fair" className="gallery__image" />
                <img src={photo4} alt="Flower Festival" className="gallery__image" />
                <img src={photo5} alt="Desert Festival" className="gallery__image" />
                <img src={photo6} alt="Festival of Ice" className="gallery__image" />
                <img src={photo7} alt="Spirit's Eve" className="gallery__image" />
                <img src={photo8} alt="Night Market" className="gallery__image" />
                <img src={photo9} alt="Luau" className="gallery__image" />
            </div>
        </section>
    );
}

export default PhotoGallery;