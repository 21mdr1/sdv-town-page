import { Link, NavLink, useLocation } from 'react-router-dom';
import svLogo from '../../assets/logo/sv_logo.png';
import mainNormal from '../../assets/links/main-normal.png'
import mainHighlighted from '../../assets/links/main-highlighted.png'
import festivalsNormal from '../../assets/links/festivals-normal.png';
import festivalsHighlighted from '../../assets/links/festivals-highlighted.png';
import './Header.scss';

function Header() {
    let { pathname } = useLocation();

    return (
        <header className="header">
            <nav className="nav">
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
                            <NavLink to='/' className="nav__clickable">
                                <img 
                                    className='nav__link-img'  
                                    src={pathname === '/' ? mainHighlighted : mainNormal} 
                                    alt="Main"
                                />
                            </NavLink>
                        </li>
                        <li className="nav__link">
                            <NavLink to='/festivals' className="nav__clickable">
                                <img 
                                    className='nav__link-img'
                                    src={pathname === "/festivals" ? festivalsHighlighted : festivalsNormal} 
                                    alt="Festivals"
                                />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;