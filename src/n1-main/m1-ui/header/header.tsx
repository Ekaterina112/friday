import React from 'react';
import s from './header.module.css'
import Menu from './menu/menu';
import Sign from './sign/sign';


function Header() {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                Study Point
                <span>.</span>
            </div>
            <Menu/>
            <Sign/>
        </div>
    );
}

export default Header;