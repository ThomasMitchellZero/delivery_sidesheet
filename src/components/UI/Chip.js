import classes from "./Chip.module.css";

const Chip = (props) => {

  return (
    <button  className={`${classes.chip} ${props.selected === props.id ? classes.selected : classes.active}`} onClick={props.onClick} id={props.id}>
      {props.name}
    </button>
  );
};

export default Chip;
