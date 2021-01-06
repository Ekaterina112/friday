import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './sign.module.css'
import {PATH} from '../../routes/routes';


function Sign() {
    return (
        <nav>
            <span className={s.item}>
                    <NavLink to={PATH.LOGIN} activeClassName={s.activeLink}> SIGN IN </NavLink>
                </span>
            <span className={s.item}>
                    <NavLink to={PATH.REGISTRATION} activeClassName={s.activeLink}> SIGN UP </NavLink>
                </span>
            <span className={s.item}>
                    <NavLink to={PATH.RECOVERY_PASSWORD} activeClassName={s.activeLink}> RECOVERY PASSWORD </NavLink>
                </span>
            <span className={s.item}>
                    <NavLink to={PATH.NEW_PASSWORD} activeClassName={s.activeLink}> CHANGE PASSWORD </NavLink>
                </span>
        </nav>
    );
}

export default Sign;