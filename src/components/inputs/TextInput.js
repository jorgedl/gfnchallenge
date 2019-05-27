import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ placeholder, icon, onChange, value }) {
    return (
        <div className="input input--text">
            <input
                placeholder={placeholder}
                className="input__field"
                type="text"
                value={value}
                onChange={({ target: { value: inputValue } }) =>
                    onChange(inputValue)
                }
            />
            {icon}
        </div>
    );
}

TextInput.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.node,
    onChange: PropTypes.func,
    value: PropTypes.string
};

TextInput.defaultProps = {
    placeholder: '',
    icon: null,
    onChange: () => {},
    value: ''
};

export default TextInput;
