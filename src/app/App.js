import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import i18next from 'i18next';

import Header from '../components/header/Header';
import StorePerformance from './storePerformance/StorePerformance';

import './App.less';

function App() {
    return (
        <Router>
            <div className="app">
                <Header title={i18next.t('name')} />
                <div className="app__container">
                    <Route exact path="/" component={StorePerformance} />
                </div>
            </div>
        </Router>
    );
}

export default App;
