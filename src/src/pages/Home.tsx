import React, { useContext, useEffect, useState } from 'react';

import './home.scss';
import CardsList from '../organisms/cards-list/cardsList';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import BasicModal from '../organisms/modal/modal';
import { PetContext } from '../context/pets.context';

interface HomeInter { }



const Home: React.FC<HomeInter> = (props) => {
    const { petsList, getPets, handleSuccess, isFiltred } = useContext(PetContext);


    const [openCreate, setOpenCreate] = React.useState(false);



    const handleOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);

    useEffect(() => {
        getPets && getPets();
    }, [])



    const alertHTML = (title: string, text: any) => (
        <div className='page-wrapper'>
            <Alert severity="info">
                <AlertTitle>{title}</AlertTitle>
                {text}
            </Alert>
        </div>

    )

    const petsLitsHTML = (
        <div className="page-wrapper">
            <CardsList itemsList={petsList}></CardsList>
        </div>
    )

    return <div className='wrapper-home'>

        <div className='wrapper-buttons'>
            <Button variant="contained" size="large" onClick={handleOpenCreate}>Añadir mascota</Button>
            {isFiltred ? <Button variant="contained" size="large" onClick={() => getPets && getPets()}>Restaurar Filtros</Button> : <></>}
        </div>

        {!petsList || petsList.length === 0 ? alertHTML('Info', <>No se encontraron mascotas — <Button onClick={getPets}>Intentar de nuevo</Button></>) : petsLitsHTML}

        <BasicModal open={openCreate} handleClose={handleCloseCreate} handleOpen={handleOpenCreate} handleSuccess={handleSuccess}></BasicModal>
    </div>
}
export default Home;