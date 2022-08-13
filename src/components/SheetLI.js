import classes from "./SheetLI.module.css";
import appClasses from "../App.module.css"

const SheetLI = (props) => {
  return (
    <div className={classes.fullContainer}>
      <div className={classes.label}>
        <p className={appClasses.descriptor_text}>{props.label}</p>
      </div>
      <div className={classes.content}>
        <p className={appClasses.content_text}>{props.content}
        </p>
      </div>
    </div>
  );
};

export default SheetLI;
