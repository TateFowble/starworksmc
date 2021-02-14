import { React } from 'react';

import './halfsection.css';




const halfsection = (props) => {
    let image = props.image;
    return (
        <div className='fl w-100'>
            <div className='fl w-50 halfsection-background-image' style={{backgroundImage:`url(${image})`}}>
            </div>
        </div>
    )
}

export default halfsection;