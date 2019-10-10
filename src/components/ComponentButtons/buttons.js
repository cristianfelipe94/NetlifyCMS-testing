import React from 'react';

import './buttons.scss';

function Button ({title = 'Crea un comunicado', group= 'secondary', type= 'button'}) {

    const btnType = group;

    const btnStyle = {
        main: 'btn btn--subscribe',
        secondary: 'btn btn--comunicate-white',
        third: 'btn btn--comunicate-pink',
        fourth: 'btn btn--package',
        fifth: 'btn btn--comunicate-big'
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
