import React from 'react';
import { useHistory } from 'react-router-dom';
import './vehiclecard.scss';

export default function Vehiclecard({ item }) {
	const history = useHistory();

	return (
		<div
			className='card'
			onClick={() =>
				history.push({ pathname: `/result/${item.name}`, state: { item } })
			}
		>
			<img src={item.images[0]} alt={item.name}></img>
			<div className='inner-text-container'>
				<p>{item.name}</p>
			</div>
		</div>
	);
}
