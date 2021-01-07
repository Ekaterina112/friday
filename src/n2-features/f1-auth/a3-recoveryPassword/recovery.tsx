import React from 'react';
import stylesContainer from './../../../n1-main/m1-ui/common/container/container.module.css';
import s from './recovery.module.css'


function RecoveryPage() {
    return ( <div className={`${stylesContainer.container} ${s.recoveryPage}`}>
            <h2>Recovery password here</h2>
        </div>
    );
}

export default RecoveryPage;
