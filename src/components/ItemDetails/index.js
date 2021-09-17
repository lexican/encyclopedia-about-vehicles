import { useState } from 'react';
import './index.scss';

export default function ItemDetails({ item }) {
	const [currentTranscription, setCurrentTranscription] = useState('english');

	const transcribe = () => {
		if (currentTranscription === 'english') setCurrentTranscription('yoruba');
		else if (currentTranscription === 'yoruba')
			setCurrentTranscription('english');
	};

	return (
		<div className='item-details'>
			<h2>{item.names[currentTranscription]}</h2>
			<div className='transcription'>
				{item.transcription[currentTranscription]}
			</div>

			<div className='about'>{item.about[currentTranscription]}</div>

			<button onClick={transcribe}>
				Translate to{' '}
				<span>{currentTranscription === 'english' ? 'Yoruba' : 'English'}</span>
			</button>
		</div>
	);
}
