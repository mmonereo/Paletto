import './AuthModal.css';
import {useContext} from 'react';
import { useHistory } from 'react-router';
import {UserContext} from '../../contexts/UserContext';
import AuthService from '../../services/auth.service';

const myAuthService = new AuthService();

function AuthModal({type, closeModal}){

	const {userState, setUserState} = useContext(UserContext);

	const history = useHistory();

	function redirectToPalettes() {
		history.push('/palettes');
	}

	function loginAuthService(email, password) {
		
		myAuthService.login(email, password)
			.then(res => {
				console.log(res.data);
				setUserState({
					...res.data
				})
				
				redirectToPalettes();
			})
			.catch(err => {
				console.log(err);
			});
	}

	function signupAuthService(email, password) {
		
		myAuthService.signup(email, password)
			.then(res => {
				const { email, _id, favorites } = res.data;
				setUserState({
					email: email,
					_id: _id,
					favorites: favorites,
					needsProfile: true
				})
			})
			.catch(err => {
				console.log(err);
			});
	}


	function submitAuthModal(e) {
		e.preventDefault();
		const { email, password, action } = userState;

		if (action === 'LogIn') {
			loginAuthService(email, password);
		}
		else if (action === 'SignUp') {
			signupAuthService(email, password);
		}
	}

	function handleChange(e) {
		const { value, name} = e.target;
		const {action} = e.target.dataset;
		setUserState({
			...userState, [name]: value, action
		});
	}

	return (
		<div className="auth-modal">
			<div className="auth-modal-content">
				<div className="auth-modal-title">
					<h2>{type === "SignUp" ? "Create Account" : "Please Log In"}</h2>
				</div>
				<form onSubmit={(e) => submitAuthModal(e)}>

					<div className="form-group">
						<label htmlFor="email-input">Email</label>
						<input type="email" id="email-input" name="email" data-action={type} onChange={(e)=>handleChange(e)}/>
					</div>

					<div className="form-group">
						<label htmlFor="password-input">Password</label>
						<input type="password" id="password-input" name="password" autoComplete="on" data-action={type} onChange={(e)=>handleChange(e)}/>
					</div>

					<button type="submit"> {type}</button>
					<button type="button" id={type} onClick={(e)=>closeModal(e)}>Close</button>
				</form>
			</div>
		</div>
	);
}

export default AuthModal;