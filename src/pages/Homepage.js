import { React } from 'react';

import './pagecss/homepage.css';

// import Navigation from '../components/navigation/navigation';
import Halfsection from '../components/halfsection/halfsection';

import theImage from '../assets/123.png';

const HomePage = () => {
    return (
        <div>
            <div>
                <div>
                    <Halfsection image={theImage} />
                </div>
                <div>
                    <Halfsection image={theImage} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;