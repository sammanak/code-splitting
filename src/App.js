import React, { Component } from 'react';
import Home from './components/pages/Home';
import AsyncComponent from './components/AsyncComponent';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'home',
      component: ''
    }
  }

  onRouteChange = (route) => {
    // No Code Splitting
    this.setState({ route: route });
    //With Code Splitting
    // if(route === 'home') {
    //   this.setState({ route: route });
    // } else if (route === 'about' ) {
    //   import('./components/pages/About').then((About) => {
    //     console.log(About);
    //     this.setState({ route: route, component: About.default })
    //   })
    // } else if (route === 'contact' ) {
    //   import('./components/pages/Contact').then((Contact) => {
    //     console.log(Contact);
    //     this.setState({ route: route, component: Contact.default })
    //   })
    // }
  }

  // It Download All the Components into webpack bundle.js 
  // No Flush but need  
  // render() {
  //   const { route } = this.state;
  //   if( route === 'home' ) {
  //     return <Home onRouteChange={this.onRouteChange} />
  //   } else if( route === 'about' ) {
  //     return <About onRouteChange={this.onRouteChange} />
  //   } else if( route === 'contact' ) {
  //     return <Contact onRouteChange={this.onRouteChange} />
  //   }    
  // }

  // It Download Only the Needed Components & split into separate bundle js 
  // No Flush
  // render() {
  //   const { route } = this.state;
  //   if( route === 'home' ) {
  //     return <Home onRouteChange={this.onRouteChange} />
  //   } else {
  //     return <this.state.component onRouteChange={this.onRouteChange} />
  //   }   
  // }

  // Async Component Same above
  // It Flush when click link to other page
  render() {
    const { route } = this.state;
    if( route === 'home' ) {
      return <Home onRouteChange={this.onRouteChange} />
    } else if( route === 'about' ) {
      const AsyncAbout = AsyncComponent(()=> import('./components/pages/About'));
      return <AsyncAbout onRouteChange={this.onRouteChange} />
    } else if( route === 'contact' ) {
      const AsyncContact = AsyncComponent(()=> import('./components/pages/Contact'));
      return <AsyncContact onRouteChange={this.onRouteChange} />
    }    
  }
  
}

export default App;
