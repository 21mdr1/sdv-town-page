import { Link, NavLink } from 'react-router-dom';
import svLogo from '../../assets/logo/sv_logo.png';
import linkBackground from '../../assets/backgrounds/link-background.png';
import woodBackground from '../../assets/backgrounds/wood1.png';
import './Header.scss';

function Header() {
    return (
        <nav className="nav" style={
            {backgroundImage: `url(${woodBackground})`}
        }>
            <div className="nav__container">
                <Link to='/' className='nav__logo'>
                    <img 
                        className='nav__logo-img' 
                        src={svLogo}
                        alt="stardew valley logo"
                    />
                </Link>
                <ul className="nav__links" >
                    <li className="nav__link">
                        <NavLink to='/' 
                            style={
                                {background: `url(${linkBackground})`}
                            } 
                            className="nav__clickable"
                        >
                            Main
                        </NavLink>
                    </li>
                    <li className="nav__link">
                        <NavLink to='/festivals' 
                            style={
                                {background: `url(${linkBackground})`}
                            }
                            className="nav__clickable"
                        >
                            Festival
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;