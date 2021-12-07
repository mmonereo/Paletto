
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import {UserContext} from './contexts/UserContext';
import AuthService from './services/auth.service';
import Landing from './containers/landing/Landing';
import Main from './containers/main/Main';

function App() {

	const myAuthService = new AuthService();

	const [userState, setUserState] = useState({
		username: null,
		favorites: [],
		_id: null
	});

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<UserContext.Provider value={{userState, setUserState}}>
					<Route path="/" exact component={Landing} />
					<Route path="/palettes" component={Main} />
					</UserContext.Provider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
