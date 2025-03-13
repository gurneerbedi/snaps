import "./Button.scss";

const Button = ({
    selected = false,
    variant = "primary",
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={`button ${
                selected ? "button--selected" : ""
            } button--${variant} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
