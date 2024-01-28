import { Fragment } from "react";
import classes from "./Cart.module.css";


const DelightfulArrival = (props) => {
  return (
    <Fragment>
      <section>
        <h2>THANK YOU!!! We're delighted to fulfill your order!</h2>
      </section>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );
};
export default DelightfulArrival;
