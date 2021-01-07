import React from 'react';
import s from './register.module.css'
import stylesContainer from './../../../n1-main/m1-ui/common/container/container.module.css';


function RegistrationPage() {
    return (<div className={`${stylesContainer.container} ${s.registerPage}`} >
            <h2>Register here</h2>
        </div>
    );
}

export default RegistrationPage;
