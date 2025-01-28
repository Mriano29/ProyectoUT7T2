import React, { useState, useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom'
import { Button, Paper, Box, Card } from '@mui/material'
import Typo from '@mui/material/Typography'

const voiceControl = () => {
  const [mostrarVideo, setMostrarVideo] = useState(false)
  const [mostrarAyuda, setMostrarAyuda] = useState(false)
  const [mostrarBoton, setMostrarBoton] = useState(false)
  const navigate = useNavigate()

  function handlevideo() {
    setMostrarVideo(true);
    setMostrarBoton(false);
    const audioElement = document.createElement('audio');
    audioElement.src = "rickAudio.mp3";
    document.body.appendChild(audioElement);
    audioElement.autoplay = true
    audioElement.play().catch((error) => console.error("Error al reproducir el audio:", error));
  }

  function handleBoton() {
    setMostrarBoton(true)
  }

  function handleAyuda() {
    setMostrarAyuda(true)
  }

  function handleCerrarAyuda() {
    setMostrarAyuda(false)
  }

  const commands = [
    {
      command: 'Navegar a *',
      callback: (page) => {
        if (page === "menú") {
          navigate(`/`)
        } else if (page === "contacto") {
          navigate(`/${page}`)
        } else if (page === "productos") {
          navigate(`/${page}`)
        } else if (page === "información") {
          navigate(`/${page}`)
        } else {
          setMessage("Página no encontrada")
        }
      }
    },
    {
      command: 'sorpresa',
      callback: () => handleBoton()
    }
    ,
    {
      command: 'ayuda',
      callback: () => handleAyuda()
    }
    ,
    {
      command: 'cerrar ayuda',
      callback: () => handleCerrarAyuda()
    }
  ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ continuous: true, language: 'es-ES' })
    }
  }, [browserSupportsSpeechRecognition])

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <Box
        flexGrow={1}
        flexDirection="column"
        display="flex"
        alignContent={'center'}
        alignItems={'center'}
      >
        {transcript.length !== 0 ?
          <Paper elevation={12} style={{ padding: '16px' }}>
            <Typo
              fontWeight={'bold'}
            >
              Entrada
            </Typo>
            <Typo>
              {transcript}
            </Typo>
          </Paper>
          :
          null}
        <Box
          flexDirection="column"
          display="flex"
          alignItems="center"
          style={{ marginTop: '20px' }}
        >
          {mostrarBoton ?
            <Button variant="contained" onClick={handlevideo} padding={2}>
              Pulsa para ver la sorpresa
            </Button>
            : null}
          {mostrarVideo ?
            <img
              src="https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
              alt="Rick..."
              style={{ width: "50%", height: "50%" }}
            />
            : null}
          {mostrarAyuda ?
           <Paper elevation={12} style={{ padding: '16px', margin: '5px'}}>
            <Typo textAlign={'center'}>
                Comandos: <br />
                - navegar a *pagina* <br />
              </Typo>
              <Typo textAlign={'justify'}>
                * menu  <br />
                * contacto <br />
                * productos <br />
                * informacion <br />
              </Typo>
              <Typo textAlign={'center'}>
                - sorpresa <br />
              </Typo>
              <Typo textAlign={'center'}>
                - Ayuda <br />
                - Cerrar Ayuda
              </Typo>
           </Paper>
            : null}
        </Box>
      </Box>

    </>
  )
}

export default voiceControl
