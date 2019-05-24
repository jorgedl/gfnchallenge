import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

function StoreItem({ label, value }) {
    return (
        <>
            <div className="store-list__cell">{label}</div>
            <div className="store-list__cell store-list__cell--number">
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
