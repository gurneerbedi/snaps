import "./Tag.scss";

const Tag = ({
    text,
    className = "",
    clickable = true,
    filled = false,
    handleClick,
}) => {
    const a11yProps = {
        role: "button",
        "aria-pressed": filled.toString(),
    };
    return (
        <div
            {...(clickable ? a11yProps : {})}
            onClick={handleClick}
            className={`tag ${!clickable ? "tag--not-clickable" : ""} ${
                filled ? "tag--filled" : ""
            } ${className}`}
        >
            {text}
        </div>
    );
};

export default Tag;
