import React from 'react';
import s from './newPassword.module.css'
import stylesContainer from './../../../n1-main/m1-ui/common/container/container.module.css';

function NewPasswordPage() {
    return (<div className={`${stylesContainer.container} ${s.newPassPage}`}>
            <h2>new password you can create here</h2>
        </div>
    );
}

export default NewPasswordPage;
