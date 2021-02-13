import { React } from 'react';

import './pagecss/homepage.css';

import Navigation from '../components/navigation/navigation';
import Halfsection from '../components/halfsection/halfsection';


const HomePage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'}}>
            <div>
                {/* <Navigation /> */}
            </div>
            <div>
                <div>
                    <Halfsection />
                </div>
                <div>
                    <Halfsection />
                </div>
            </div>
        </div>
    )
}

export default HomePage;