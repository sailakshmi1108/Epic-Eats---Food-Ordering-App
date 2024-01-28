import { Fragment } from "react";
import classes from "./MainNav.module.css";
import foodImage from "../../foodItemImages/final.webp"
import NavCartButton from "./NavCartButton";

const MainNav =(props)=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Epic Eats - Food Ordering App</h1>
                <NavCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes["image"]}>
                <img src={foodImage} alt="a table with full of delicious food"/>
            </div>
        </Fragment>
    )
}
export default MainNav;