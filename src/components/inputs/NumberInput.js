import React from 'react';
import PropTypes from 'prop-types';

function NumberInput({ onChange, value }) {
    return (
        <div className="input input--number">
            <input
                value={value}
                onChange={({ target: { value: fieldValue } }) => {
                    onChange(fieldValue);
                }}
                className="input__field"
                type="number"
            />
        </div>
    );
}

NumberInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
};

NumberInput.defaultProps = {
    onChange: () => {},
    value: ''
};

export default NumberInput;
