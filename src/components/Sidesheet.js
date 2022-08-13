import SidesheetHeader from "./SidesheetHeader";
import Spacer from "./Spacer";
import SheetLI from "./SheetLI";
import DeliveryStatus from "./DeliveryStatus";

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
        <SheetLI label="Delivery Date" content="Mon, Jul 8, 2021" />
        <SheetLI label="Start Time" content="9:00 a.m." />
        <SheetLI label="End Time" content="10:00 a.m." />
        <SheetLI
          label="PO #"
          content="123456231, 123456123, 555678106, 6234567810, 111167810, 123456231, 123456123, 555678106, 6234567810, 111167810, 555678106, 6234567810, 111167810, 123456231, 555678106"
        />

        <SheetLI label="Scheduled By" content="Bobbie Draper (Store) : July 4, 2022"/>
        <SheetLI label="Updated By" content="Alex Kamal (Store) : July 5, 2022" />
        <SheetLI label="Contact" content="(123) 456-7878"/>
        <SheetLI label="Type" content="Box Truck, Dock Required" />
        <SheetLI label="Cargo" content="Pallets" />
        <Spacer/>
        <DeliveryStatus/>

      </div>
    </div>
  );
};

export default Sidesheet;
