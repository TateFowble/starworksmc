import { React } from 'react';

import './halfsection.css';

import image from '../../assets/123.png';


const halfsection = (props) => {
    return (
        <div>
            <div className='halfsection-background-image' style={{ backgroundImage:`url(${image})`}}>dsadsadsas
            </div>
        </div>
    )
}

export default halfsection;