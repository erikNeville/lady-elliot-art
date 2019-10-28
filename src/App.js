import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/navigation/Navbar';


function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={HomeScreen} />
				<Route path='/about' component={AboutScreen} />
				<Route path='/contact' component={ContactScreen} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
