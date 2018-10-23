import React from 'react';
import Header from '../Header'
import Footer from '../Footer'

const Home = ({ onRouteChange }) => 
	<div className="App">
		<Header />
		<div className="App-menu-Navigation">
			<ul>
				<li className='disabled'>Home</li>
				<li onClick={() => onRouteChange('about')}>About</li>
				<li onClick={() => onRouteChange('contact')}>Contact</li>
			</ul>
			<div>
				Home Content
			</div>
		</div>
		<Footer />
	</div>

export default Home;