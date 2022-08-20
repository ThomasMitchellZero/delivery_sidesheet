import ChipMenu from "../UI/ChipMenu";
import ButtonContainer from "../UI/ButtonContainer";
import Button from "../UI/Button";
import globalClasses from "../../App.module.css";

const FinishCancel = (props) => {
  const cancelChips = [
    { id: "Traffic", name: "Traffic" },
    { id: "Mechanical Issues", name: "Mechanical Issues" },
    { id: "Weather", name: "Weather" },
    { id: "No Inventory", name: "No Inventory" },
    { id: "Reschedule", name: "Reschedule" },
    
    

  ];

  return (
    <div>
      <p className={globalClasses.header_text}>Mark Reason For Cancelation</p>
      <br></br>
      <ChipMenu>{cancelChips}</ChipMenu>
      <ButtonContainer>
        <Button onClick={props.setActive} buttonType="secondary">
          Keep Delivery
        </Button>
        <Button buttonType="primary">Cancel</Button>
      </ButtonContainer>
    </div>
  );
};

export default FinishCancel;
