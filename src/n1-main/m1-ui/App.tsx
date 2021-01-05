import React from 'react';
import './App.css';
import UniversalButton from './common/c2-Button/UniversalButton';
import UniversalCheckbox from './common/c3-Checkbox/UniversalCheckbox';
import UniversalInputText from './common/c1-InputText/UniversalInputText';

function App() {
    return (<div className="App">
            <UniversalButton/>
            <UniversalInputText/>
            <UniversalCheckbox/>
        </div>
    );
}

export default App;
