import React from 'react';
import s from './profile.module.css'
import stylesContainer from './../../../src/n1-main/m1-ui/common/container/container.module.css'


function ProfilePage() {

    return (<div className={`${stylesContainer.container} ${s.profilePage}`}>
            <h2>Your profile</h2>
        </div>
    );
}

export default ProfilePage;
