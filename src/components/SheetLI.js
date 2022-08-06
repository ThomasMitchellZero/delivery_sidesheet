import classes from "./SheetLI.module.css";
import parentClasses from "./Sidesheet.module.css";

const SheetLI = (props) => {
  return (
    <div className={classes.fullContainer}>
      <div className={classes.label}>
        <p className={parentClasses.descriptor_text}>{props.label}</p>
      </div>
      <div className={classes.content}>
        <p className={parentClasses.content_text}>{props.content}
        </p>
      </div>
    </div>
  );
};

export default SheetLI;
