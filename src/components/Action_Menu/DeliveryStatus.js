import ChipMenu from "../UI/ChipMenu";
import ButtonContainer from "../UI/ButtonContainer";
import Button from "../UI/Button";
import globalClasses from "../../App.module.css"

const DeliveryStatus = (props) => {
  const chipArray = [
    { id: "Early", name: "Early (over 30 mins)" },
    { id: "On Time", name: "On Time" },
    { id: "Late", name: "Late (over 30 mins)" },
    { id: "No Show", name: "No Show" },
  ];
  return (
    <div>
    <p className={globalClasses.header_text}>Mark Delivery Status</p>
    <br></br>
      <ChipMenu>{chipArray}</ChipMenu>
      <ButtonContainer>
        <Button buttonType="primary" onClick={props.setActive}>
          Cancel Delivery
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default DeliveryStatus;
