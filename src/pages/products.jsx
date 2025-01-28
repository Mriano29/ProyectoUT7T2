import Nav from "../components/Nav"
import VoiceControl from "../voiceControl/voiceControl"
import * as React from 'react';
import { Box } from "@mui/material";
import Tarjeta from "../components/Tarjeta";

const productos = [
    {
        id: 1,
        imagen: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_102602911?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
        titulo: "Auriculares inalambricos",
        alt: "Auriculares",
        contenido: "Buena supresion de ruido"
    }
    ,
    {
        id: 2,
        imagen: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98236715?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
        titulo: "cafetera de capsulas",
        alt: "cafetera de capsulas",
        contenido: "Capsulas baratas"
    }
    ,
    {
        id: 3,
        imagen: "https://cdn.palbincdn.com/users/9531/images/Mochila-antirrobo-laptop-15.6-gabol-capital-negro-413157-001-1-1695919801.jpg",
        titulo: "Mochila antirobo",
        alt: "Mochila antirobo",
        contenido: "Perfecta para un viaje por venezuela"
    }

]

export default function Products() {
    return (
        <>
            <Nav pagina={"Productos"} />

            <Box display={'flex'} flexDirection={'column'} flexGrow={1} alignItems={'center'} margin={'10%'}>
                <VoiceControl />
                <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} flexGrow={1} alignContent={'center'} alignItems={'center'} padding={1}>
                    {productos.map((producto) => (
                        <Tarjeta
                            key={producto.id}
                            imagen={producto.imagen}
                            titulo={producto.titulo}
                            contenido = {producto.contenido}
                            alt={producto.alt}
                        />
                    ))}
                </Box>
            </Box>
        </>
    )
}