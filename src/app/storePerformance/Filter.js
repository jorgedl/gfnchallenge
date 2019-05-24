import React from 'react';
import PropTypes from 'prop-types';

import { TextInput, NumberInput } from '../../components/inputs/Inputs';

import './Filter.less';

const inputs = {
    text: TextInput,
    number: NumberInput
};

function Filters({ type, label, placeholder, icon }) {
    const InputComponent = inputs[type];

    return (
        <div className="filter">
            <div className="filter__label">{label}</div>
            <InputComponent icon={icon} placeholder={placeholder} />
        </div>
    );
}

Filters.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.node
};

Filters.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    icon: null
};

export default Filters;
