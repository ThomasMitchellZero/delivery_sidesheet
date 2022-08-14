import classes from "./Button.module.css";

const Button = (props) => {
    return <button className={`${classes.baseButton} ${classes[props.buttonType]}`}>{props.children}</button>;
};

export default Button;
