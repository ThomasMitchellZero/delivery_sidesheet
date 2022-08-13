import ChipMenu from "../UI/ChipMenu";

const DeliveryStatus = (props) => {
  const chipArray = [
    { id: "Early", name: "Early (over 30 mins)" },
    { id: "On Time", name: "On Time" },
    { id: "Late", name: "Late (over 30 mins)" },
  ];
  
  return <ChipMenu array={chipArray}></ChipMenu>;
};

export default DeliveryStatus;
