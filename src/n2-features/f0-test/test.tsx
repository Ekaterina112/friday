import React from 'react';
import UniversalInputText from '../../n1-main/m1-ui/common/c1-InputText/UniversalInputText';
import UniversalButton from '../../n1-main/m1-ui/common/c2-Button/UniversalButton';
import UniversalCheckbox from '../../n1-main/m1-ui/common/c3-Checkbox/UniversalCheckbox';
import s from './test.module.css'
import stylesContainer from './../../../src/n1-main/m1-ui/common/container/container.module.css'
import TestBack from './test_back';
import {AddCardModelType, APIсards, UpdateCardModelType} from '../../n1-main/m3-dal/api_cards';


function TestPage() {

    let cardModel: AddCardModelType = {
        cardsPack_id: '5fe66bf32f93dc434098cdd7',
    }
    let updateCardModel: UpdateCardModelType = {id: '5eb6a2f72f849402d46c6ac7'}
    const getCards = () => {
        APIсards.getCards('5fe66bf32f93dc434098cdd7')
            .then((res) => {
                console.log(res.data)
            })
    }

    const updateCard = () => {
        APIсards.updateCard(updateCardModel)
            .then((res) => {
                console.log(res.data)
            })
    }
    const addCard = () => {
        APIсards.addCard(cardModel)
            .then((res) => {
                console.log(res.data)
            })
    }
    const deleteCard = () => {
        APIсards.deleteCard('6005e8c01a18f80004d8155d')
            .then((res) => {
                console.log(res.data)
            })
    }


    return (<div className={`${stylesContainer.container} ${s.testPage}`}>
            <UniversalInputText placeholder={'Write here'}/>
            <UniversalCheckbox> check </UniversalCheckbox>
            <UniversalButton>submit</UniversalButton>
            <TestBack/>
            <h5>CRUD</h5>
            <UniversalButton onClick={getCards}>GET</UniversalButton>
            <UniversalButton onClick={addCard}>POST</UniversalButton>
            <UniversalButton onClick={updateCard}>PUT</UniversalButton>
            <UniversalButton onClick={deleteCard}>DELETE</UniversalButton>
        </div>
    );
}

export default TestPage;
