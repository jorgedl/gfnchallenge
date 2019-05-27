import React from 'react';
import PropTypes from 'prop-types';
import StoreItem from './StoreItem';

import './StoreList.less';

function StoreList({ items, getStoreItemSuffix }) {
    return (
        <div className="store-list">
            <div className="store-list__list">
                <button
                    type="button"
                    className="store-list__cell store-list__cell--header"
                >
                    Loja
                </button>
                <button
                    type="button"
                    className="store-list__cell store-list__cell--header"
                >
                    Faturamento
                </button>
                {items.map(item => {
                    const { name, revenue, latitude, longitude } = item;
                    return (
                        <StoreItem
                            key={`${name}${latitude}${longitude}`}
                            label={name}
                            value={revenue}
                            className={getStoreItemSuffix(item)}
                        />
                    );
                })}
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
    ),
    getStoreItemSuffix: PropTypes.func
};

StoreList.defaultProps = {
    items: [],
    getStoreItemSuffix: () => {}
};

export default StoreList;
