import heroBackground from '../../assets/images/mountainsBg.png';
import './Hero.scss';

function Hero() {
    return (
        <div style={{backgroundImage: `url(${heroBackground})`}} className="hero">
            <div className="hero__overlay">
                <h1 className="hero__title">The Bees Knees</h1>
            </div>
        </div>
    );
}

export default Hero;