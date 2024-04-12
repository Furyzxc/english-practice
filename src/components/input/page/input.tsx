import { TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { useBoolean } from 'usehooks-ts'


const defaultText = 'Hello! How are you?'

export const Input = () => {
	const { value: editMode, setFalse, setTrue } = useBoolean(false)
	const [text, setText] = useState(defaultText)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	const onBlur = () => {
		if (!text) setText(defaultText)
		setFalse()
	}

	return editMode ? (
		<TextField multiline fullWidth minRows={4} value={text} onChange={onChange} onBlur={onBlur} />
	) : (
		<Typography onDoubleClick={setTrue} variant='h5'>
			{text.split('\n').map(el => <div>{el}</div>)}
		</Typography>
	)
}
