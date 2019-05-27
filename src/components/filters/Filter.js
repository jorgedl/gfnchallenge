import React from 'react';
import PropTypes from 'prop-types';

import { TextInput, NumberInput } from '../inputs/Inputs';

import './Filter.less';

const inputs = {
    text: TextInput,
    number: NumberInput
};

function Filters({ type, label, placeholder, icon, onChange, value }) {
    const InputComponent = inputs[type];

    return (
        <div className="filter">
            <div className="filter__label">{label}</div>
            <InputComponent
                onChange={onChange}
                icon={icon}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
}

Filters.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.node,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Filters.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    icon: null,
    onChange: () => {},
    value: undefined
};

export default Filters;
