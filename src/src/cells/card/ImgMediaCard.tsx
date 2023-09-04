import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ImgMediaCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }} style={{ margin: '20px'}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://cdn.pixabay.com/photo/2022/12/14/21/50/panda-bear-7656377_1280.png"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    LLDA
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ver similares</Button>
                <Button size="small">Leer más</Button>
            </CardActions>
        </Card>
    );
}

export default ImgMediaCard;