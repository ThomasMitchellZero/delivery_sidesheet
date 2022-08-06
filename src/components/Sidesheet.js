import SidesheetHeader from "./SidesheetHeader";
import Spacer from "./Spacer";
import SheetLI from "./SheetLI";

import classes from "./Sidesheet.module.css";

const Sidesheet = (props) => {
  return (
    <div className={classes.sidesheet}>
      <SidesheetHeader></SidesheetHeader>
      <div className={classes.body}>
        <p className={classes.header_text}>
          JB Hunt Trucking &emsp;&emsp;Ref #0322C5467
        </p>
        <Spacer />
        <SheetLI
          label="lab"
          content="When I was forced to read boring things in school, my mind would kick into auto pilot. My eyes would scan the words and it probably looked like I was reading, but my mind was a million miles away, dreaming about random stuff. I could barley get past a sentence, let alone an entire book. I do the same when I have a boring conversation: I nod and say mmm hmmm to feign interest but I'm not really listening and not even really there. My worse fear is them asking What did I just say?"
        />
                <SheetLI
          label="Big Old Label"
          content="When"
        />
      </div>
    </div>
  );
};

export default Sidesheet;
