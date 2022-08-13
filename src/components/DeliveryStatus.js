import classes from "./DeliveryStatus.module.css";

import PillMenu from "./UI/PillMenu";
import Pill from "./UI/Pill";

const DeliveryStatus = (props) => {
  const pillArray = [
    { id: "Early", name: "Early (over 30 mins)" },
    { id: "On Time", name: "On Time" },
    { id: "Late", name: "Late (over 30 mins)" },
  ];
  
  return <PillMenu array={pillArray}></PillMenu>;
};

export default DeliveryStatus;
