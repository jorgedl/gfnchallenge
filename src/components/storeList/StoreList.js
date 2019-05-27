import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import i18next from 'i18next';

import StoreItem from './StoreItem';

import './StoreList.less';

function StoreList({ items, getStoreItemSuffix, onSort, columns, sortInfo }) {
    return (
        <div className="store-list">
            {columns.map(({ id, label }) => {
                const sortObj = sortInfo.find(
                    ({ id: sortId }) => sortId === id
                );
                let sortClasses = '';

                if (sortObj !== undefined) {
                    sortClasses = `store-list__header--${
                        sortObj.asc ? 'asc' : 'desc'
                    }`;
                }

                const headerClassName = classNames(
                    'store-list__header',
                    sortClasses
                );
                return (
                    <button
                        type="button"
                        className={headerClassName}
                        onClick={() => onSort(id)}
                        key={id}
                    >
                        {label}
                    </button>
                );
            })}
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
            {items.length === 0 && (
                <div className="store-list__empty">
                    {i18next.t('list.empty')}
                </div>
            )}
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
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string
        })
    ),
    onSort: PropTypes.func,
    getStoreItemSuffix: PropTypes.func,
    sortInfo: PropTypes.arrayOf(PropTypes.shape({}))
};

StoreList.defaultProps = {
    items: [],
    columns: [],
    onSort: () => {},
    getStoreItemSuffix: () => {},
    sortInfo: []
};

export default StoreList;
