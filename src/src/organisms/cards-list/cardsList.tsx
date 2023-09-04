import React from 'react';

import './cardsList.scss';

import ImgMediaCard from '../../cells/card/ImgMediaCard';


interface CardsListInter {
    itemsList?: number[];
}

const CardsList: React.FC<CardsListInter> = ({ itemsList }) => {
    return <>
        {
            itemsList?.map((item, index) => {
                return <ImgMediaCard key={index}></ImgMediaCard>
            })
        }
    </>
}

export default CardsList;