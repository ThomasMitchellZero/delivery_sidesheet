import parentclasses from "./Sidesheet.module.css";
import classes from "./SidesheetHeader.module.css";
import { MdClose } from "react-icons/md";

const SidesheetHeader = (props) => {
  return (
    <div className={classes.header}>
        <div className={classes.icon}>
        <MdClose/>
        </div>

      <p className={classes.content}>Delivery Details</p>
    </div>
  );
};

export default SidesheetHeader;
