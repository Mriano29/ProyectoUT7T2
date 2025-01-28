import Nav from "../components/Nav"
import VoiceControl from "../voiceControl/voiceControl"
import { Box } from "@mui/material"
import Typo from "@mui/material/Typography"
import { Link } from "react-router-dom"

export default function ContactUs(){
    return(
        <>
        <Nav pagina={"Contáctanos"}/>
        <Box display={'flex'} flexDirection={{xs:'column', md:'row'}} flexGrow={1} alignItems={'center'} margin={'10%'}>
            <VoiceControl/>
            <Box display={'flex'} flexDirection={'column'} flexGrow={1} alignContent={'center'} alignItems={'center'}>
                <img src="/gaticoChulo.jpeg" alt="Gatito molto trabajador" height={'50%'} width={'50%'}/>
                <Typo
                    fontWeight={'bold'}
                >
                    Gatito bien Trabajador
                </Typo>
              <Link to={"https://pizzaroyers.com/inicio"} target="_blank">
              <Typo>
                    Contáctanos al 928 79 41 45!
                </Typo>
              </Link>
            </Box>
        </Box>
        </>
    )
}