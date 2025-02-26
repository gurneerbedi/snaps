import filters from "../../data/tags.json";
import Tag from "../Tag/Tag";
import IconButton from "../IconButton/IconButton";
import close from "../../assets/images/icons/Close.svg";
import "./Filters.scss";

const Filters = ({
    selectedFilter,
    setSelectedFilter,
    handleClose,
    showClose = false,
}) => {
    return (
        <section className="filters">
            {showClose && (
                <div className="filters__close">
                    <IconButton onClick={handleClose}>
                        <img src={close} alt="X to close icon" />
                    </IconButton>
                </div>
            )}
            <h3 className="filters__header">Filters</h3>
            <div className="filters__list">
                {filters.map((filter) => (
                    <Tag
                        key={filter}
                        clickable
                        text={filter}
                        filled={selectedFilter === filter}
                        className="filters__tag"
                        handleClick={() => {
                            selectedFilter === filter
                                ? setSelectedFilter(undefined)
                                : setSelectedFilter(filter);
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Filters;
