import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ placeholder, icon }) {
    return (
        <div className="input input--text">
            <input
                placeholder={placeholder}
                className="input__field"
                type="text"
            />
            {icon}
        </div>
    );
}

TextInput.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.node
};

TextInput.defaultProps = {
    placeholder: '',
    icon: null
};

export default TextInput;
