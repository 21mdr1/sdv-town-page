import scroll from '../../assets/backgrounds/scroll-background.png';
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

    const galleryPictures = [
        {
            img: photo1,
            alt: "Feast of the Winterstar Secret Santa",
        },
        {
            img: photo2,
            alt: "Trout Derby",
        },
        {
            img: photo3,
            alt: "Stardew Valley Fair",
        },
        {
            img: photo4,
            alt: "Flower Festival",
        },
        {
            img: photo5,
            alt: "Desert Festival",
        },
        {
            img: photo6,
            alt: "Festival of Ice",
        },
        {
            img: photo7,
            alt: "Spirit's Eve",
        },
        {
            img: photo8,
            alt: "Night Market",
        },
        {
            img: photo9,
            alt: "Luau",
        },
    ]

    return (
        <section className="gallery">
            <h2 className="gallery__title" style={{backgroundImage: `url(${scroll})`}}>Photo Gallery</h2>
            <div className="gallery__image-container">
                {galleryPictures.map(image => 
                    <img 
                        key={image.alt}
                        src={image.img} 
                        alt={image.alt}
                        className="gallery__image" 
                    />
                )}
            </div>
        </section>
    );
}

export default PhotoGallery;