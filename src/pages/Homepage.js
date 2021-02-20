import { React } from 'react';

import './pagecss/homepage.css';

import Navigation from '../components/navigation/navigation';

const HomePage = () => {
    return (
        <div>
            <div className='w-100 h-100 homepage-background'>
                {/* <Navigation /> */}
                <div className='w-100 h-10'></div>
                <div className='w-20 h-10 fl-l inline '></div>
                <div className='w-60 h-10 fl-l inline text-center'>
                    <h1 className='text'>PLAY.STARWORKSMC.US</h1>
                </div>
                <div className='w-20 h-10 fl-l inline'></div>
            </div>
        </div>
    )
}

export default HomePage;