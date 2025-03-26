import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ RightSideButton }) => (
    <header className="header">
        <Link to="/" className="header__link">
            <h1 className="header__text">Snaps</h1>
        </Link>
        <RightSideButton />
    </header>
);

export default Header;
