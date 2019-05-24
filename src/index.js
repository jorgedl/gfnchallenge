import React from 'react';
import ReactDOM from 'react-dom';
import numeral from 'numeral';
import 'numeral/locales';

import App from './app/App';

import './styles/index.less';

numeral.locale('pt-br');

ReactDOM.render(<App />, document.getElementById('app'));
