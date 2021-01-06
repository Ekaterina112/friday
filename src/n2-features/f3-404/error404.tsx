import React from 'react';
import s from './error404.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from '../../n1-main/m1-ui/routes/routes';


function ErrorPage() {
    return (<div className={s.errorPage}>
          <h1>404</h1>
            <p className={s.firstP}>Page not found</p>
            <p className={s.secondP}>Sorry, but the page you were looking for doesn’t exist.</p>
            <p className={s.thirdP}>Go back to
                  <span className={s.item}>
                    <NavLink to={PATH.PROFILE} activeClassName={s.activeLink}>PROFILE</NavLink>
                </span>
            </p>
        </div>
    );
}

export default ErrorPage;
