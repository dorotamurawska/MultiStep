// style:
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <p className="footer__txt">SwapMyBills.com is a trading name of Client Flo Media Limited.
                    Registered Office Address - 5-9 Main Street, GX11 1AA. Company Number 120004.</p>
            </div>
            <div className="footer__wrap">
                <div className="footer__wrap-short">
                    <a href="/#" className="footer__a">Terms</a>
                    <a href="/#" className="footer__a">Privacy Policy</a>
                </div>
                <p className="footer__txt">{`Copyright © 2021 SwapMyBills.com`}</p>
            </div>
        </footer>
    );
}

export default Footer;