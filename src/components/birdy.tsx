import React from 'react';
import Gengar from './Gengar.gif'

import './birdy.css';


export const Birdy: React.FC = () => {
    return(
        <div className='birdy'>
            <img src={Gengar} alt="Gengar" className='Gengar'/>
        </div>
    );
};
