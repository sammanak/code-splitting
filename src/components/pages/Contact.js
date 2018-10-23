import React from 'react';
import Header from '../Header'
import Footer from '../Footer'

const Contact = ({ onRouteChange }) => 
	<div className="App">
		<Header />
		<div className="App-menu-Navigation">
			<ul>
				<li onClick={ () => onRouteChange('home') }>Home</li>
				<li onClick={ () => onRouteChange('about') }>About</li>
				<li className='disabled'>Contact</li>
			</ul>
		</div>
		<div>
			Contact Content
		</div>
		<Footer />
	</div>

export default Contact;