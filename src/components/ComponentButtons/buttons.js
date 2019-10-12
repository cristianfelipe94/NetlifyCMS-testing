import React from 'react';
import PropTypes from 'prop-types';
import './buttons.scss';
import classNames from 'classnames';

function Button ({ title, button, type, action, defaultStyle, customStyle}) {
    const mainClassNames = classNames(`${defaultStyle} btn--primary ${customStyle}`);
    const secondaryClassNames = classNames(`${defaultStyle} btn--secondary ${customStyle}`)
    const btnStyle = button === 'primary' ? mainClassNames : secondaryClassNames;
    return (
        <button className= {btnStyle} type= {type} onClick= {action} >
            {title}
        </button>
    );
}

Button.defaultProps = {
    action: () => console.log("Default function"),
    title: "Botón",
    defaultStyle: 'btn',
    customStyle: "",
    button: PropTypes.oneOf(['primary', 'secondary']),
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
}

Button.propTypes = {
    action: PropTypes.func,
    title: PropTypes.string,
    defaultStyle: PropTypes.string,
    customStyle: PropTypes.string,
    button: PropTypes.string,
    type: PropTypes.string,
}

export default Button;
