import React from 'react';

import './cardsList.scss';

import ImgMediaCard from '../../cells/card/ImgMediaCard';
import { petsInter } from '../../context/pets.context';


interface CardsListInter {
    itemsList?: petsInter[];
}

const CardsList: React.FC<CardsListInter> = ({ itemsList }) => {
    return <>
        {
            itemsList?.map((pet, index) => {
                return <ImgMediaCard key={index} pet={pet} ></ImgMediaCard>
            })
        }
    </>
}

export default CardsList;