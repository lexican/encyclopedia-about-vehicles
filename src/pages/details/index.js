import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ItemDetails from '../../components/ItemDetails';
import Navbar from '../../components/Navbar/navbar';
import { data } from '../../data';
import './index.scss';

export default function DetailsPage() {
	const [currentImage, setCurrentImage] = useState(0);
	const location = useLocation();
	let item = location.state?.item;
	const text = location.state?.text;
	let error = null;

	if (text) {
		const index = data.findIndex((d) => d.name === text.toLowerCase() || d.names.yoruba === text.toLowerCase());
		if (index !== -1) item = data[index];
		else {
			error = 'Vehicle not found';
		}
	}

	const previous = () => {
		setCurrentImage((prev) => {
			if (prev > 0) return prev - 1;
			return prev;
		});
	};

	const next = () => {
		setCurrentImage((prev) => {
			if (prev < item.images.length - 1) return prev + 1;
			return prev;
		});
	};

	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div
			className='details-page'
			style={{
				backgroundImage: `url(${item.images[currentImage]})`,
			}}
		>
			<div className='nav-wrapper'>
				<Navbar />
			</div>

			<div className='left-nav' onClick={previous}>
				<img src={require('../../assets/icons/left.svg').default} alt='' />
			</div>

			<div className='details-wrapper'>
				<ItemDetails item={item} />
			</div>

			<div className='right-nav' onClick={next}>
				<img src={require('../../assets/icons/right.svg').default} alt='' />
			</div>
		</div>
	);
}
