import SidesheetHeader from "./SidesheetHeader";
import classes from "./Sidesheet.module.css";

const Sidesheet = (props) => {
  return (
    <div className={classes.sidesheet}>
      <SidesheetHeader></SidesheetHeader>
    </div>
  );
};

export default Sidesheet;
