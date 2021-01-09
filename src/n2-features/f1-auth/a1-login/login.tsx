import React, {useState} from 'react';
import stylesContainer from '../../../n1-main/m1-ui/common/container/container.module.css';
import s from '../../f0-test/test.module.css';
import UniversalInputText from '../../../n1-main/m1-ui/common/c1-InputText/UniversalInputText';
import UniversalCheckbox from '../../../n1-main/m1-ui/common/c3-Checkbox/UniversalCheckbox';
import UniversalButton from '../../../n1-main/m1-ui/common/c2-Button/UniversalButton';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthUserData} from './login-reducer';
import {AppRootStateType} from '../../../n1-main/m1-bll/store';
import {Redirect} from 'react-router-dom';


function LoginPage() {
    const dispatch = useDispatch()
    let isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [rememberMe, setRememberMe] = useState<boolean>(false)

    let onclickHandler = () => {
        console.log(email, password, rememberMe)
        dispatch(getAuthUserData(email, password, rememberMe))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div className={`${stylesContainer.container} ${s.loginForm}`}>
            <h4>SIGN IN</h4>
            <UniversalInputText type={'email'}
                                placeholder={'Enter email'}
                                onChangeText={setEmail}/>
            <UniversalInputText type={'password'}
                                placeholder={'Password'}
                                onChangeText={setPassword}/>
            <UniversalCheckbox onChangeChecked={setRememberMe}>Remember me</UniversalCheckbox>
            <UniversalButton onClick={onclickHandler}>Submit</UniversalButton>
        </div>
    );
}

export default LoginPage;
