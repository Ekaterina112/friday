import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Routes from './routes/routes';
import Header from './header/header';


function App() {
    return (<div className="App">
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default App;
