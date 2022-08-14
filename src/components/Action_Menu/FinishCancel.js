import ChipMenu from "../UI/ChipMenu";
import ButtonContainer from "../UI/ButtonContainer";
import Button from "../UI/Button";

const FinishCancel = (props) => {
  const cancelChips = [
    { id: "Early", name: "Early (over 30 mins)" },
    { id: "On Time", name: "On Time" },
    { id: "Late", name: "Late (over 30 mins)" },
  ];

  return (
    <div>
      <ChipMenu>{cancelChips}</ChipMenu>
      <ButtonContainer>
      <Button buttonType="tertiary__disabled">Tertiary</Button>
      </ButtonContainer>
    </div>
  );
};

export default FinishCancel;
