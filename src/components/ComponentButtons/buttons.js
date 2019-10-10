import React from 'react';

import './buttons.scss';

const Buttons = {
    SubscribeBtn: () => <button className= {'layout__btn--standar layout__btn--subscribe'}>Subscribirse</button>,
    WhiteComunicateBtn: () => <button className= {'layout__btn--standar layout__btn--comunicate-white'}>Crea un comunicado</button>,
    PinkComunicateBtn: () => <button className= {'layout__btn--standar layout__btn--comunicate-pink'}>Crea un comunicado</button>,
    BigComunicateBtn: () => <button className= {'layout__btn--standar layout__btn--comunicate-big'}>Crea tu comunicado</button>,
    BasicPackBtn: () => <button className= {'layout__btn--standar layout__btn--package'}>Obtener Básico</button>,
    StandarPackBtn: () => <button className= {'layout__btn--standar layout__btn--package'}>Obtener Estandar</button>,
    PremiumPackBtn: () => <button className= {'layout__btn--standar layout__btn--package'}>Obtener Premium</button>,
}

export default Buttons;
