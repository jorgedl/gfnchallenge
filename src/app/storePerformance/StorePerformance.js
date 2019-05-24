import React from 'react';

// components
import TextInput from '../../components/inputs/TextInput';

// styles
import './StorePerformance.less';

function StorePerformance() {
    return (
        <div className="performance">
            <div className="performance__item">
                <TextInput />
            </div>
            <div className="performance__item">Filter 2</div>
            <div className="performance__item">Lojas</div>
            <div className="performance__item">Mapa</div>
        </div>
    );
}

export default StorePerformance;
