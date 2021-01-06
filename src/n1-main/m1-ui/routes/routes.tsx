import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ErrorPage from '../../../n2-features/f3-404/error404';
import ProfilePage from '../../../n2-features/f2-profile/profile';
import LoginPage from '../../../n2-features/f1-auth/a1-login/login';
import RegistrationPage from '../../../n2-features/f1-auth/a2-register/register';
import RecoveryPage from '../../../n2-features/f1-auth/a3-recoveryPassword/recovery';
import TestPage from '../../../n2-features/f0-test/test';
import NewPasswordPage from '../../../n2-features/f1-auth/a4-newPassword/newPassword';
import s from './routes.module.css'


export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    RECOVERY_PASSWORD: '/recoveryPassword',
    NEW_PASSWORD: '/newPassword',
    PROFILE: '/profile',
    TEST: '/test'
}

function Routes() {
    return (
        <div className={s.routes}>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
                <Route path={PATH.REGISTRATION} render={() => <RegistrationPage/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} render={() => <RecoveryPage/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPasswordPage/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfilePage/>}/>
                <Route path={PATH.TEST} render={() => <TestPage/>}/>
                <Route render={() => <ErrorPage/>}/>
            </Switch>


        </div>
    );
}

export default Routes;