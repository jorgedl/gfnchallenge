import React from 'react';
import ReactDOM from 'react-dom';
import numeral from 'numeral';
import 'numeral/locales';
import i18next from 'i18next';
import * as ptBRTranslations from './translations/pt-br.json';

import App from './app/App';

import './styles/index.less';

numeral.locale('pt-br');

i18next.init({
    lng: 'br',
    resources: {
        br: {
            translation: ptBRTranslations.default
        }
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
