import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
	return (
		<div className='header'>
			<Link className='brand' to='/'>
				ve.
			</Link>
		</div>
	);
}
