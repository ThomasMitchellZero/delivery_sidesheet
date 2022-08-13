import ButtonContainer from "../UI/ButtonContainer";
import Button from "../UI/Button";

const StartCancel = (props) => {
  return (
    <ButtonContainer>
      <Button buttonType="tertiary__disabled">Tertiary</Button>
      <Button buttonType="secondary__disabled">2nd</Button>
      <Button buttonType="primary__disabled">Cancel Delivery</Button>
    </ButtonContainer>
  );
};

export default StartCancel;
