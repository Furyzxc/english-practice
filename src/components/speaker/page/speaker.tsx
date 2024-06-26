import {
	KeyboardVoice,
	SquareRounded,
	VolumeUpRounded,
} from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useSpeaker } from "@/components/speaker/model/hooks.ts";

export const Speaker = () => {
	const { ref, recording, audioBlob, startRecording, stopRecording, handlePlay } = useSpeaker()
	return (
		<div>
			<IconButton
				size='large'
				sx={{ bgcolor: '#E4254D !important' }}
				onClick={recording ? stopRecording : startRecording}
			>
				{recording ? (
					<SquareRounded fontSize='large' sx={{ color: 'white' }} />
				) : (
					<KeyboardVoice fontSize='large' sx={{ color: 'white' }} />
				)}
			</IconButton>
			<IconButton size='large' sx={{ bgcolor: '#19A950 !important' }}>
				<VolumeUpRounded
					onClick={handlePlay}
					fontSize='large'
					sx={{ color: 'white' }}
				/>
			</IconButton>
			{audioBlob && (
				<audio
					hidden
					controls
					ref={ref}
					src={URL.createObjectURL(audioBlob)}
				/>
			)}
		</div>
	)
}
