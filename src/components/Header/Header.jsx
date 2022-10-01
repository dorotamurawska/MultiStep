// svg:
import logo from '../../svg/logo.svg';
import padlock from '../../svg/padlock.svg';

// style:
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo" />
            <div className="header__wrap">
                <img src={padlock} className="header__padlock" alt="padlock icon" />
                <p className="header__txt">{`Safe & Secure`}</p>
            </div>
        </header>
    );
}

export default Header;
