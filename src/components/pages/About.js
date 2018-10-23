import React from 'react';
import Header from '../Header'
import Footer from '../Footer'

const About = ({ onRouteChange }) => 
	<div className="App">
		<Header />
		<div className="App-menu-Navigation">
			<ul>
				<li onClick={() => onRouteChange('home')}>Home</li>
				<li className='disabled'>About</li>
				<li onClick={() => onRouteChange('contact')}>Contact</li>
			</ul>
		</div>
		<div>
			About Content
		</div>
		<Footer />
	</div>

export default About;