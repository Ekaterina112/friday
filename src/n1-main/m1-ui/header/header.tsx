import React from 'react';
import s from './header.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from '../routes/routes';


function Header() {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                Study Point
                <span>.</span>
            </div>
            <nav>
               <span className={s.item}>
                    <NavLink to={PATH.PROFILE} activeClassName={s.activeLink}>PROFILE</NavLink>
                </span>
                <span className={s.item}>
                    <NavLink to={PATH.TEST} activeClassName={s.activeLink}>TEST PAGE</NavLink>
                </span>
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
        </div>
    );
}

export default Header;