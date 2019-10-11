import React from 'react';
import './buttons.scss';

function Button ({title = 'Crea un comunicado', render= 'secondary', type= 'button'}) {

    const btnType = render;

    const btnStyle = {
        main: 'btn btn--primary',
        secondary: 'btn btn--secondary-white',
        third: 'btn btn--secondary-pink',
        fourth: 'btn btn--package',
        fifth: 'btn btn--secondary-big'
    }

    const btnAction = {
        main: () => {console.log('Main btn was clicked')},
        secondary: () => {console.log('Secondary btn was clicked')},
        third: () => {console.log('Third btn was clicked')},
        fourth: () => {console.log('Fourth btn was clicked')},
        fifth: () => {console.log('Fifth btn was clicked')}
    }
    
    return (
        <button className= {btnStyle[btnType]} type= {type} onClick= {btnAction[btnType]}>
            {title}
        </button>
    );
}

export default Button;
