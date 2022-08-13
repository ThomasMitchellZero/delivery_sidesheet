import classes from "./ButtonContainer.module";
import Spacer from "./Spacer";

const ButtonContainer = (props) => {
  return (
    <div>
      <div className={classes.buttonContainer}>{props.children}</div>;
      <Spacer />
    </div>
  );
};

export default ButtonContainer;
