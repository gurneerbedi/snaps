import FacebookIcon from "../../assets/images/icons/Facebook.svg";
import InstagramIcon from "../../assets/images/icons/Instagram.svg";
import Pinterest from "../../assets/images/icons/Pinterest.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <div className="footer__top">
                    <h2 className="footer__header">Snaps</h2>
                    <div className="footer__text-links">
                        <ol className="footer__list">
                            <li>
                                <a className="footer__link" href="">
                                    For photographers
                                </a>
                            </li>
                            <li>
                                <a className="footer__link" href="">
                                    Hire talent
                                </a>
                            </li>
                            <li>
                                <a className="footer__link" href="">
                                    Inspiration
                                </a>
                            </li>
                        </ol>
                        <ol className="footer__list">
                            <li>
                                <a className="footer__link" href="">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="footer__link" href="">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a className="footer__link" href="">
                                    Support
                                </a>
                            </li>
                        </ol>
                    </div>
                    <ol className="footer__list footer__list--horizontal footer__socials">
                        <li>
                            <a className="footer__link" href="">
                                <img src={FacebookIcon} alt="" />
                            </a>
                        </li>
                       
                        <li>
                            <a className="footer__link" href="">
                                <img src={InstagramIcon} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="footer__link" href="">
                                <img src={Pinterest} alt="" />
                            </a>
                        </li>
                    </ol>
                </div>

                <ol className="footer__list footer__list--horizontal">
                    <li>
                        <a className="footer__link footer__link--light" href="">
                            © 2024 Snaps
                        </a>
                    </li>
                    <li>
                        <a className="footer__link footer__link--light" href="">
                            Terms
                        </a>
                    </li>
                    <li>
                        <a className="footer__link footer__link--light" href="">
                            Privacy
                        </a>
                    </li>
                    <li>
                        <a className="footer__link footer__link--light" href="">
                            Conditions
                        </a>
                    </li>
                </ol>
            </nav>
        </footer>
    );
};

export default Footer;
