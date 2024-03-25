import { useRef, useState } from "react";
import { useBoolean } from "usehooks-ts";

interface Speaker {
  recording: boolean
  audioBlob: Blob | null
  startRecording: () => void
  stopRecording: () => void
  handlePlay: () => void

}

export const useSpeaker = (): Speaker => {
  const { value: recording, setTrue, setFalse } = useBoolean(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const startRecording = () => {
    navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorderRef.current = new MediaRecorder(stream)
      mediaRecorderRef.current.ondataavailable = handleDataAvailable
      mediaRecorderRef.current.start()
      setTrue()
    })
    .catch(err => console.error('Error accessing microphone:', err))
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      setFalse()
    }
  }

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data.size > 0) {
      const audioBlob = new Blob([event.data], { type: 'audio/wav' })
      setAudioBlob(audioBlob)
    }
  }

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  return {
    recording, audioBlob, startRecording, handlePlay, stopRecording
  }
}
