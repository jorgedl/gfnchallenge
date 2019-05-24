import React from 'react';
import PropTypes from 'prop-types';

import { TextInput, NumberInput } from '../../components/inputs/Inputs';

import './Filter.less';

const inputs = {
    text: TextInput,
    number: NumberInput
};

function Filters({ type, label }) {
    const InputComponent = inputs[type];

    return (
        <div className="filter">
            <div className="filter__label">{label}</div>
            <InputComponent />
        </div>
    );
}

Filters.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string
};

Filters.defaultProps = {
    type: 'text',
    label: ''
};

export default Filters;
