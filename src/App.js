import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Contact from './components/contact'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-169641322-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Contact></Contact>

          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
