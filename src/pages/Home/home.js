import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from '../../assets/icons/search.svg';
import Navbar from '../../components/Navbar/navbar';
import Vehiclecard from '../../components/VehicleCard/vehiclecard';
import { data } from '../../data';
import './home.scss';

export default function Home() {
	let history = useHistory();
	const [text, setText] = useState('');

	const handleSearch = () => {
		if (text.length > 0) {
			history.push({ pathname: `/result/${text}`, state: { text } });
		}
	};

	return (
		<div className='home'>
			<div className='banner'>
				<Navbar />

				<div className='inner-container'>
					<h2>Vehicle encyclopedia</h2>
					<div className='input-container'>
						<img src={Search} onClick={handleSearch} alt='Search icon' />
						<input
							type='text'
							placeholder='Seach any type of vehicle'
							className='form-control'
							onChange={(e) => setText(e.target.value)}
						></input>
					</div>
				</div>

				<section className='main'>
					<h4>Select a type of vehicle</h4>
					<div className='vehicles'>
						{data.slice(0, 7).map((item) => {
							return <Vehiclecard key={item.name} item={item} />;
						})}
					</div>
					<div className='vehicles'>
						{data.slice(7, 14).map((item) => {
							return <Vehiclecard key={item.name} item={item} />;
						})}
					</div>
				</section>
			</div>
		</div>
	);
}
