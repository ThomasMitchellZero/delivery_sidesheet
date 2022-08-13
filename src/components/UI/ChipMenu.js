import React, {useState} from "react";
import Chip from "./Chip"
import classes from "./ChipMenu.module.css";

const ChipMenu = (props) => {

    const [chipState, setChipState] = useState(undefined)

    // use a ternary statement to conditionally apply an active / not active class to the pills.
    const handleChipClick = (event) => {
        event.preventDefault()
        const eTarget = event.target.id
        setChipState(eTarget)
    }

    const chipContents = props.array.map((item) => {
        return <Chip id={item.id} name={item.name} key={item.id} onClick={handleChipClick} selected={chipState}/>;
      });
    
  return <form>{chipContents}</form>;
};

export default ChipMenu