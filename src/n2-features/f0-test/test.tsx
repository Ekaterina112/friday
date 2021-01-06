import React from 'react';
import UniversalInputText from '../../n1-main/m1-ui/common/c1-InputText/UniversalInputText';
import UniversalButton from '../../n1-main/m1-ui/common/c2-Button/UniversalButton';
import UniversalCheckbox from '../../n1-main/m1-ui/common/c3-Checkbox/UniversalCheckbox';
import s from './test.module.css'


function TestPage() {
    return (<div className={s.testPage}>
            <UniversalInputText placeholder={'Write here'}/>
            <UniversalCheckbox> check </UniversalCheckbox>
            <UniversalButton>submit</UniversalButton>
        </div>
    );
}

export default TestPage;
