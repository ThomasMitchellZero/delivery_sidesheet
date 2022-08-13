import classes from "./Button.module.css";

const Button = (props) => {
    return <button className={classes[props.buttonType]}>{props.buttonText}</button>;
};

export default Button;
