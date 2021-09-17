import { useLocation } from 'react-router';
import ItemDetails from '../../components/ItemDetails';
import Navbar from '../../components/Navbar/navbar';
import './index.scss';

export default function DetailsPage() {
	const location = useLocation();

	const item = location.state?.item;
	console.log('item', item);

	return (
		<div
			className='details-page'
			style={{
				backgroundImage: `url(${item.images[0]})`,
			}}
		>
			<div className='nav-wrapper'>
				<Navbar />
			</div>

			<div className='left-nav'>
				<img src={require('../../assets/icons/left.svg').default} alt='' />
			</div>

			<div className='details-wrapper'>
				<ItemDetails item={item} />
			</div>

			<div className='right-nav'>
				<img src={require('../../assets/icons/right.svg').default} alt='' />
			</div>
		</div>
	);
}
