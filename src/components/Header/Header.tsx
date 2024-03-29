import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo-bandsite.svg';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__container">
                    <Link to='/' className='nav__logo'>
                        <img src={logo} alt="bandsite logo"/>
                    </Link>
                    <ul className="nav__links" >
                        <li className="nav__link">
                            <NavLink to='/' className="nav__clickable">
                                Biography
                            </NavLink>
                        </li>
                        <li className="nav__link">
                            <NavLink to='/festivals' className="nav__clickable">
                                Shows
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;