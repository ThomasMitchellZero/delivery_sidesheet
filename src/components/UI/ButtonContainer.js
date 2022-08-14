import classes from "./ButtonContainer.module.css";
import Spacer from "./Spacer";

const ButtonContainer = (props) => {
  return (
    <div className={classes.buttonContainer}>
      <Spacer />
      <div>{props.children}</div>;
    </div>
  );
};

export default ButtonContainer;
