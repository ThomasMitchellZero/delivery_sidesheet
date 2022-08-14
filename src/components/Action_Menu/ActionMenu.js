import DeliveryStatus from "./DeliveryStatus";
import FinishCancel from "./FinishCancel";

const ActionMenu = (props) => {
  return (
    <div>
      <DeliveryStatus></DeliveryStatus>
      <FinishCancel></FinishCancel>
    </div>
  );
};

export default ActionMenu;
