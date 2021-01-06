import React from 'react';
import './App.css';
import Routes from './routes/routes';
import Header from './header/header';


function App() {
    return (<div className="App">
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;
