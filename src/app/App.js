import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import StorePerformance from './storePerformance/StorePerformance';

import './App.less';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="app__container">
                    <Route exact path="/" component={StorePerformance} />
                    <Route path="/page/:pageId" component={StorePerformance} />
                    <Route
                        path="/page/:pageId/revenue/:revenueValue"
                        component={StorePerformance}
                    />
                    <Route
                        path="revenue/:revenueValue"
                        component={StorePerformance}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
