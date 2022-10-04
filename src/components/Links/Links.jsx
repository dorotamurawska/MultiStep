// img:
import img from '../../img/lets_encrypt.png';

// svg:
import padlock from '../../svg/padlock.svg';

// style:
import './Links.scss';

const Links = () => {

    const dataForLinks = ['Safe', 'Secure', 'Privacy Protected'];

    const renderLinks = dataForLinks.map((link, index) => <li key={link} className="links__li"><a href='/#' className="links__a">{index === 0 ? <img src={padlock} className="links__padlock" alt="padlock icon" /> : null}{link}</a></li>)

    return (
        <div className="links">
            <ul className="links__wrap">
                {renderLinks}
            </ul>
            <div className="links__wrap-img">
                <img src={img} className="links__img" alt="lets encrypt" />
            </div>
        </div>
    );
}

export default Links;
