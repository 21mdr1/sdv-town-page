import logo from '../../assets/logo/logo-bandsite.svg';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__container">
                    <a className="nav__logo" href="index.html">
                        <img src={logo} alt="bandsite logo"/>
                    </a>
                    <ul className="nav__links">
                        <li className="nav__link nav__link--selected"><a className="nav__clickable" href="index.html">Biography</a></li>
                        <li className="nav__link"><a className="nav__clickable" href="./pages/shows.html">Shows</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;