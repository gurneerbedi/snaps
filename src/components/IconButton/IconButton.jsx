import "./IconButton.scss";

const IconButton = ({ children, ...props }) => {
    return (<button className="icon-button" {...props}>{children}</button>);
};

export default IconButton;