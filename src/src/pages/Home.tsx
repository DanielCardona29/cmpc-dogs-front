import React from 'react';

import './home.scss';
import CardsList from '../organisms/cards-list/cardsList';

interface HomeInter { }

const Home: React.FC<HomeInter> = (props) => {

    return <div className='wrapper-home'>

        <div className="class-wrapper">
            <CardsList itemsList={[1, 2, 3, 4, 6, 7, 8]}></CardsList>
        </div>
    </div>
}
export default Home;