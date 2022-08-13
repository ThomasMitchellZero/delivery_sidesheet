import classes from "./SidesheetHeader.module.css";
import appClasses from "../App.module.css"
import { MdClose } from "react-icons/md";

const SidesheetHeader = (props) => {
  return (
    <div className={classes.header}>
        <div className={classes.icon}>
        <MdClose/>
        </div>

      <p className={appClasses.header_text}>Delivery Details</p>
    </div>
  );
};

export default SidesheetHeader;
