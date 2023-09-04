import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, TextareaAutosize } from '@mui/material';


import './modal.scss';
import { petsInter } from '../../context/pets.context';
import Services from '../../utils/services';
import { URL_HOST } from '../../utils/constans';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max-content',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

interface childModalInter {
    open: boolean,
    handleOpen: () => void,
    handleClose: () => void
    handleSuccess?: () => void
}

export interface breedsEntity {
    id: string
    scientificName: string
    commonName: string
    keywords: string[]
}

export interface subbreedEntity {
    id: string
    scientificName: string
    commonName: string
    keywords: string[]
    breed: string
}

const ChildModal: React.FC<childModalInter> = (props) => {

    const { handleClose, handleOpen, open } = props;

    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}


const DEFAULT_SUBBREED = {
    id: "0",
    commonName: 'N/A',
    keywords: [],
    scientificName: 'N/A',
    breed: ''
}

const DEFAULT_BREED = {
    id: "0",
    commonName: 'N/A',
    keywords: [],
    scientificName: 'N/A'
}


const DEFAULT_PET: petsInter = {
    name: "",
    age: "",
    characteristics: "",
    img: "",
    color: "",
    breedId: "0",
    subBreedID: "0",
}

const NestedModal: React.FC<childModalInter> = (props) => {

    const { open, handleClose, handleSuccess } = props;

    const [openChildModal, setOpenChildModal] = React.useState(false);
    const [petForm, setPetForm] = React.useState<petsInter>(DEFAULT_PET);

    const [breedsList, setBreedsList] = React.useState<breedsEntity[]>();

    const [subbreedsList, setSubBreedsList] = React.useState<subbreedEntity[]>();

    const Service = new Services(URL_HOST);

    const getBreeds = () => Service.getBreeds().then(res => setBreedsList(res));
    const getSubBreeds = () => Service.getSubBreeds().then(res => setSubBreedsList(res));
    const createPet = async () => {
        const res: petsInter = await Service.createPet(petForm);
        if (res.id) {
            handleSuccess && handleSuccess();
            handleClose();
        }
    }

    const handleOpenChildModal = (isBreed?: boolean) => {
        setOpenChildModal(true);
    };



    const handleCloseChildModal = () => {
        setOpenChildModal(false);
    };


    const handleField = (e: any) => {
        setPetForm(({
            ...petForm,
            [e.target.id]: e.target.value
        } as any));
    }


    React.useEffect(() => {
        getBreeds();
        getSubBreeds();
    }, [])



    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }}>
                    <h2 id="parent-modal-title">Crear mascotas</h2>

                    <div className='wrapper-form '>

                        <div className='row'>
                            <TextField
                                className='field'
                                required
                                id="name"
                                label="Nombre"
                                onChange={handleField}
                                value={petForm?.name}
                            />

                            <TextField
                                className='field'
                                required
                                id="age"
                                label="Edad"
                                onChange={handleField}
                                value={petForm?.age}
                            />

                            <TextField
                                className='field'
                                required
                                id="color"
                                label="Color"
                                onChange={handleField}
                                value={petForm?.color}

                            />
                        </div>

                        <div className='row'>

                            <TextField
                                className='field'
                                required
                                id="img"
                                label="img"
                                sx={{ width: '100%' }}
                                onChange={handleField}
                                value={petForm?.img}

                            />

                        </div>

                        <div className='row'>

                            <TextareaAutosize
                                className='area'
                                onChange={handleField}
                                value={petForm?.characteristics}
                                id="characteristics"
                                style={{ width: 717, height: 100, borderRadius: 8, border: '1px solid black', fontFamily: 'Roboto' }}
                                aria-label="empty textarea"
                                placeholder="Caracteristicas" />
                        </div>


                        <div className='row'>
                            <TextField
                                className='field'
                                required
                                select
                                sx={{ width: 200 }}

                                SelectProps={{
                                    native: true,
                                }}
                                id="breedId"
                                label="Raza"
                                onChange={handleField}
                                value={petForm?.breedId}
                            >

                                <option selected key={DEFAULT_BREED.commonName} value={DEFAULT_BREED.id}>
                                    {DEFAULT_BREED.commonName}
                                </option>
                                {
                                    breedsList?.map((option, index) => (
                                        <option key={option.commonName} value={option.id}>
                                            {option.commonName}
                                        </option>
                                    ))
                                }
                            </TextField>

                            <TextField
                                className='field'
                                required
                                select
                                sx={{ width: 200 }}
                                SelectProps={{
                                    native: true,
                                }}
                                id="subBreedID"
                                label="Sub Raza"
                                onChange={handleField}
                                value={petForm?.subBreedID}
                            >

                                <option selected key={DEFAULT_SUBBREED.commonName} value={DEFAULT_SUBBREED.id}>
                                    {DEFAULT_SUBBREED.commonName}
                                </option>

                                {
                                    subbreedsList?.map((option, index) => (
                                        <option key={option.commonName} value={option.id}>
                                            {option.commonName}
                                        </option>
                                    ))
                                }
                            </TextField>
                        </div>

                        <div className='wrapper-button'>
                            <Button onClick={() => handleOpenChildModal(true)}>Crear Raza</Button>

                            <Button onClick={() => handleOpenChildModal(false)}>Crear Subraza</Button>

                        </div>

                        <div className='wrapper-button'>
                            <Button onClick={createPet} variant='contained'>Crear</Button>
                        </div>

                    </div>

                    <ChildModal handleClose={handleCloseChildModal} handleOpen={handleOpenChildModal} open={openChildModal} />
                </Box>
            </Modal>
        </div>
    );
}

export default NestedModal;