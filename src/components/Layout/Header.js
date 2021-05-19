import React, {Fragment} from 'react';
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Dinner Menu</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="A table full of food"/>
            </div>
        </Fragment>
    );
};

export default Header;