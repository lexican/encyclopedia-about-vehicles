import './index.scss';

export default function ItemDetails({ item }) {
	return (
		<div class='item-details'>
			<h2>{item.name}</h2>
			<div className='transcription'>{item.transcription.english}</div>

			<div className='about'>{item.about.english}</div>

			<button>Translate to Yoruba</button>
		</div>
	);
}
