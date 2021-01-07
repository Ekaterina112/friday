import React from 'react';
import stylesContainer from './../../../n1-main/m1-ui/common/container/container.module.css'
import s from './login.module.css'



function LoginPage() {
    return (<div className={`${stylesContainer.container} ${s.loginPage}`}>
            <h2> Login here</h2>
</div>
);
}

export default LoginPage;
