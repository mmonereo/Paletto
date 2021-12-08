
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import {UserContext} from './contexts/UserContext';
import AuthService from './services/auth.service';
import Landing from './containers/landing/Landing';
import Main from './containers/main/Main';

function App() {

	const myAuthService = new AuthService();

	const [userState, setUserState] = useState({
		email: null,
		password: null,
		isAuth: false
	});

	



	function loginAuthService(email, password) {
		console.log("en authUser con usuario: ", email, password);
			myAuthService.login(email, password)
				.then(res => {
					const { email, _id, favorites } = res.data;
					setUserState({
						email: email,
						_id: _id,
						favorites: favorites,
						isAuth: true
					})
					/* 				CR
									for (const property in data) {
										console.log(`${property}: ${data[property]}`);
									} */
				})
				.catch(err => {
					console.log(err);
				});
	}

	function signupAuthService(email, password) {
		console.log("en signupAuthService con usuario: ", email, password);
		myAuthService.signup(email, password)
			.then(res => {
				const { email, _id, favorites } = res.data;
				setUserState({
					email: email,
					_id: _id,
					favorites: favorites,
					isAuth: true
				})
			})
			.catch(err => {
				console.log(err);
			});
	}


	function submitAuthModal(e) {
		e.preventDefault();
		const {email, password, action} = userState;
	
		if (action === 'LogIn') {
			loginAuthService(email, password);
		}
		else if (action === 'SignUp') {
			signupAuthService(email, password);
		}
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<UserContext.Provider value={{userState, setUserState}}>
						<Route path="/" exact render={(props) => <Landing {...props} submitAuthModal={submitAuthModal}/>} />
						<Route path="/palettes" component={Main} />
					</UserContext.Provider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
