import "./FiltersButton.scss";
import FilterIcon from "../FilterIcon/FilterIcon";

const FiltersButton = ({ handleClick }) => {
    return (
        <button className="filters-button" onClick={handleClick}>
            <span>Filters</span> <FilterIcon />
        </button>
    );
};

export default FiltersButton;
