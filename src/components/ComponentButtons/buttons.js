import React from 'react';
import PropTypes from 'prop-types';
import './buttons.scss';
function Button ({title, render, type, action}) {

    const btnType = render;

    const btnStyle = {
        main: 'btn btn--primary',
        secondaryWhite: 'btn btn--secondary-white',
        secondaryPink: 'btn btn--secondary-pink',
        secondaryBlack: 'btn btn--secondary-black',
        secondaryBig: 'btn btn--secondary-big',
        default: 'btn'
    }

    return (
        <button className= {btnStyle[btnType]} type= {type} onClick= {action}>
            {title}
        </button>
    );
}

Button.defaultProps = {
    title: "Botón",
    render: "default",
    type: "button",
    action: () => console.log("Default function"),
}

Button.propTypes = {
    title: PropTypes.string,
    render: PropTypes.string,
    type: PropTypes.string,
    action: PropTypes.func,
}

export default Button;
