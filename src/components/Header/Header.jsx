import FiltersButton from "../FiltersButton/FiltersButton";
import "./Header.scss";
import IconButton from "../IconButton/IconButton";


const Header = ({ filtersOpen, handleButtonClick, showClose = true }) => {
    return (
        <header className="header">
            <h2 className="header__text">Snaps</h2>
            {filtersOpen && showClose && (
                <IconButton onClick={handleButtonClick}>
                    <img src={close} alt="X to close icon" />
                </IconButton>
            )}
            {!filtersOpen && <FiltersButton handleClick={handleButtonClick} />}
        </header>
    );
};

export default Header;
