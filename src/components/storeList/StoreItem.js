import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import classNames from 'classnames';

function StoreItem({ label, value, className }) {
    const itemClasses = classNames(
        'store-list__cell store-list__cell--number',
        {
            [`store-list__cell--${className}`]: className !== undefined
        }
    );
    return (
        <>
            <div className="store-list__cell">{label}</div>
            <div className={itemClasses}>
                {numeral(value).format('$0,0.00')}
            </div>
        </>
    );
}

StoreItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export default StoreItem;
