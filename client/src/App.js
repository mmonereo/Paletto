import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import { ColorContext } from './contexts/ColorContext';
import {UserContext} from './contexts/UserContext';
import Landing from './pages/landing/Landing';
import Main from './pages/main/Main';
import Social from './pages/social/Social';
import { TOAST_POSITIONS } from './constants'; 
import { Toaster } from 'react-hot-toast';


function App() {

	const [userState, setUserState] = useState({
		needsProfile: false,
	});

	const [colorState, setColorState] = useState({
		sourceColor: '#7fb5d8',
		mode: 'analogic',
		count: 2,
		colorScheme: []
	});

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<UserContext.Provider value={{userState, setUserState}}>
						<ColorContext.Provider value={{ colorState, setColorState }}>

							<Toaster containerStyle={TOAST_POSITIONS} />
							<Route path="/" exact render={(props) => <Landing {...props}/>} />
							<Route path="/palettes" component={Main} />
							<Route path="/social" component={Social} />

						</ColorContext.Provider>
					</UserContext.Provider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
