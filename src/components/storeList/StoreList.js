import React from 'react';
import PropTypes from 'prop-types';
import StoreItem from './StoreItem';

import './StoreList.less';

function StoreList({ items }) {
    return (
        <div className="store-list">
            <div className="store-list__list">
                <div className="store-list__cell store-list__cell--header">
                    Loja
                </div>
                <div className="store-list__cell store-list__cell--header">
                    Faturamento
                </div>
                {items.map(({ name, revenue, latitude, longitude }) => (
                    <StoreItem
                        key={`${name}${latitude}${longitude}`}
                        label={name}
                        value={revenue}
                    />
                ))}
            </div>
        </div>
    );
}

StoreList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            revenue: PropTypes.number,
            latitude: PropTypes.number,
            longitude: PropTypes.number
        })
    )
};

StoreList.defaultProps = {
    items: []
};

export default StoreList;
