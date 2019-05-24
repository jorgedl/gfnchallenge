import React from 'react';

import Header from '../components/header/Header';
import StorePerformance from './storePerformance/StorePerformance';

import './App.less';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__container">
                <StorePerformance />
            </div>
        </div>
    );
}

export default App;
