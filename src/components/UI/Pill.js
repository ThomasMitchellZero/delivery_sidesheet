import classes from "./Pill.module.css";

const Pill = (props) => {

  return (
    <button className={`${classes.pill} ${props.selected === props.id ? classes.selected : classes.active}`} onClick={props.onClick} id={props.id}>
      {props.name}
    </button>
  );
};

export default Pill;
