import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typo from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';

export default function Tarjeta({ imagen, titulo, alt, contenido }) {
    return (
        <>
            <Box padding={2}>
                <Card sx={{ maxWidth: 345 }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height={'50%'}
                            image={imagen}
                            alt={alt}
                        />
                        <CardContent>
                            <Typo gutterBottom variant="h5" component="div">
                                {titulo}
                            </Typo>
                            {contenido.length !== 0 ?
                                <Typo>
                                    {contenido}
                                </Typo>
                                : null
                            }
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </>
    )
}