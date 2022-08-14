import ChipMenu from "../UI/ChipMenu";
import ButtonContainer from "../UI/ButtonContainer";
import Button from "../UI/Button";

const DeliveryStatus = (props) => {
  const chipArray = [
    { id: "Early", name: "Early (over 30 mins)" },
    { id: "On Time", name: "On Time" },
    { id: "Late", name: "Late (over 30 mins)" },
  ];
  return (
    <div>
      <ChipMenu array={chipArray}></ChipMenu>
      <ButtonContainer>
        <Button buttonType="tertiary__disabled">Tertiary</Button>
        <Button buttonType="secondary__disabled">2nd</Button>
        <Button buttonType="primary__disabled">Cancel Delivery</Button>
      </ButtonContainer>
    </div>
  );
};

export default DeliveryStatus;
