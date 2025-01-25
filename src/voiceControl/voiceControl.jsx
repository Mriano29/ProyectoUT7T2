import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom'

const VozOrdenes = () => {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const commands = [
    {
      command: 'Navegar a *',
      callback: (page) => {
        if(page === "menú"){
            navigate(`/`)
        }else if(page === "contacto"){
            navigate(`/${page}`)
        }else if(page === "productos"){
            navigate(`/${page}`)
        }else if(page === "información"){
            navigate(`/${page}`)
        }else{
            setMessage("Página no encontrada")
        }
        
      }
    }
  ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ continuous: true, language: 'es-ES' })
    }
    return () => {
     
    }
  }, [browserSupportsSpeechRecognition])

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div>
      <p>{transcript}</p>
      <p>{message}</p>
    </div>
  )
}

export default VozOrdenes
