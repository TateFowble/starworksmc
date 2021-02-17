import { React } from 'react';

import './pagecss/homepage.css';

import Navigation from '../components/navigation/navigation';

const HomePage = () => {
    return (
        <div className='w-100 h-100 homepage-background'>
            <div className='w-50' style={{backgroundColor:'blue'}}></div>
        </div>
    )
}

export default HomePage;