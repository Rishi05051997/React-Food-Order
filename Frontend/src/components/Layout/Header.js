import { Fragment } from 'react';
import img from "./../../assets/meals.jpg"
import classes from "./../Layout/Header.module.css"
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={img} alt="a table full of deleicious food!" />
            </div>
        </Fragment>
    )
}

export default Header;
