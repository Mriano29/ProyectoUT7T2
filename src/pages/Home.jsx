import Nav from "../components/Nav"
import VoiceControl from "../voiceControl/voiceControl"
import { Box } from "@mui/material"
import Typo from "@mui/material/Typography"

export default function Home() {
    return (
        <>
            <Nav pagina={"Home"} />

            <Box display={'flex'} flexDirection={{ xs: 'column' }} flexGrow={1} alignItems={'center'} margin={'10%'} >
                <img src="bienvenido.jpeg" alt="Bienvenido" height={'75%'} width={'75%'} />
                <Typo>
                    Di  "Ayuda" para conocer los comandos
                </Typo>
                <VoiceControl />
            </Box>
        </>
    )
}