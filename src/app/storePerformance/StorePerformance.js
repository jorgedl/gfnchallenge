import React from 'react';

// components
import Filters from './Filter';

// styles
import './StorePerformance.less';

function StorePerformance() {
    return (
        <div className="performance">
            <div className="performance__item">
                <Filters type="text" />
            </div>
            <div className="performance__item">
                <Filters label="Faturamento mínimo necessário" type="number" />
            </div>
            <div className="performance__item">Lojas</div>
            <div className="performance__item">Mapa</div>
        </div>
    );
}

export default StorePerformance;
