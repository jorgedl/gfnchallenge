import React from 'react';
import PropTypes from 'prop-types';

import './Header.less';

function Header({ title }) {
    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
