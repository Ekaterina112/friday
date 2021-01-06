import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../routes/routes';
import s from './menu.module.css'

function Menu() {
    return (
        <nav>
               <span className={s.item}>
                    <NavLink to={PATH.PROFILE} activeClassName={s.activeLink}>PROFILE</NavLink>
                </span>
            <span className={s.item}>
                    <NavLink to={PATH.TEST} activeClassName={s.activeLink}>TEST PAGE</NavLink>
                </span>
        </nav>
    );
}

export default Menu;