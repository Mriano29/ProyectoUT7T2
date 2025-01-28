import Nav from "../components/Nav"
import VoiceControl from "../voiceControl/voiceControl"
import { Box } from "@mui/material"
import Typo from "@mui/material/Typography"
import Tarjeta from "../components/Tarjeta"

export default function AboutUs() {
    return (
        <>
            <Nav pagina={"Sobre nosótros"} />
            <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} flexGrow={1} alignItems={'center'} margin={'10%'}>
                <VoiceControl />
                <Tarjeta 
                imagen={'marr.jpg'} 
                alt={"Miguel Riaño"} 
                titulo={"Miguel Riaño - Increible diseñador de paginas"} 
                contenido={"Esta página es como temu, tiene un poco de todo"} />
            </Box>
        </>
    )
}