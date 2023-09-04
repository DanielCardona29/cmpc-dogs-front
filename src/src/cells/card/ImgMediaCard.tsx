import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PetContext, petsInter } from '../../context/pets.context';


interface ImgMediaCardInter {
    pet: petsInter;
}


const ImgMediaCard: React.FC<ImgMediaCardInter> = (props) => {
    const { pet } = props;

    const { deletePet, getSimilarPets } = React.useContext(PetContext);


    return (
        <Card sx={{ maxWidth: 345 }} style={{ margin: '20px' }}>
            <CardMedia
                component="img"
                alt={pet.name}
                height="140"
                image={pet.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pet.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {pet.characteristics}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => getSimilarPets && getSimilarPets(pet.breedId!, pet.subBreedID!)}>Ver similares</Button>
                <Button size="small" onClick={() => deletePet && deletePet(pet.id!)}>Eliminar</Button>
            </CardActions>
        </Card>
    );
}

export default ImgMediaCard;