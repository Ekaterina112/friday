import React from 'react';
import UniversalInputText from '../../n1-main/m1-ui/common/c1-InputText/UniversalInputText';
import UniversalButton from '../../n1-main/m1-ui/common/c2-Button/UniversalButton';
import UniversalCheckbox from '../../n1-main/m1-ui/common/c3-Checkbox/UniversalCheckbox';
import s from './test.module.css'
import stylesContainer from './../../../src/n1-main/m1-ui/common/container/container.module.css'
import TestBack from './test_back';

function TestPage() {
    return (<div className={`${stylesContainer.container} ${s.testPage}`}>
            <UniversalInputText placeholder={'Write here'}/>
            <UniversalCheckbox> check </UniversalCheckbox>
            <UniversalButton>submit</UniversalButton>
            <TestBack/>
        </div>
    );
}

export default TestPage;
