import React, {useState} from "react";
import Pill from "./Pill"
import classes from "./PillMenu.module.css";

const PillMenu = (props) => {

    const [pillState, setPillState] = useState(undefined)

    // use a ternary statement to conditionally apply an active / not active class to the pills.
    const handlePillClick = (event) => {
        event.preventDefault()
        const eTarget = event.target.id
        setPillState(eTarget)
    }

    const pillContents = props.array.map((item) => {
        return <Pill id={item.id} name={item.name} key={item.id} onClick={handlePillClick} selected={pillState}/>;
      });
    
  return <form>{pillContents}</form>;
};

export default PillMenu