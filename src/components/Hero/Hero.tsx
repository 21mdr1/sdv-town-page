import { useLocation } from 'react-router-dom';
import mainBackground from '../../assets/images/mountainsBg.png';
import festivalsBackground from '../../assets/images/Stardew_Valley_Beginner_s_guide_Polygon.jpg';
import './Hero.scss';

function Hero() {
    const { pathname } = useLocation();

    return (
        <div style={{backgroundImage: `url(${pathname === '/' ? mainBackground : festivalsBackground})`}} className="hero">
            <div className="hero__overlay">
                <h1 className="hero__title">{pathname === '/' ? 'Pelican Town Square' : 'Festivals'}</h1>
            </div>
        </div>
    );
}

export default Hero;