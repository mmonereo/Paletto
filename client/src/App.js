
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import {UserContext} from './contexts/UserContext';
import Landing from './containers/landing/Landing';
import Main from './containers/main/Main';

function App() {

	const [userState, setUserState] = useState({
		email: null,
		password: null,
		isAuth: false
	});

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<UserContext.Provider value={{userState, setUserState}}>
						<Route path="/" exact render={(props) => <Landing {...props}/>} />
						<Route path="/palettes" component={Main} />
					</UserContext.Provider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
