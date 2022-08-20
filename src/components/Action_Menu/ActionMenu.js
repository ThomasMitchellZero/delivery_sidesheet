import { useState } from "react";

import DeliveryStatus from "./DeliveryStatus";
import FinishCancel from "./FinishCancel";

const ActionMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("DeliveryStatus");

  const handleMenuChange = () => {
    if (activeMenu === "DeliveryStatus") {
      setActiveMenu("FinishCancel");
    } else {
      setActiveMenu("DeliveryStatus");
    }
  };

  return (
    <div>
      {activeMenu === "DeliveryStatus" ? (
        <DeliveryStatus setActive={handleMenuChange}></DeliveryStatus>
      ) : (
        <FinishCancel setActive={handleMenuChange}></FinishCancel>
      )}
    </div>
  );
};

export default ActionMenu;
