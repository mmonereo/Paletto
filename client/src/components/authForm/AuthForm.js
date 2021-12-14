import './AuthForm.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import AuthService from '../../services/auth.service';
import toast from 'react-hot-toast'


const myAuthService = new AuthService();

function AuthForm({ type, needsProfile }) {

	const [authFormState, setAuthFormState ] = useState({
		email: '',
		password: '',
		action: '',
	});

	const history = useHistory();

	function redirectToPalettes() {
		history.push('/palettes');
	}

	function loginAuthService(email, password) {

		myAuthService.login(email, password)
			.then(res => redirectToPalettes())
			.catch(err => toast.error(err.response.data.errorMessage));
	}

	function signupAuthService(email, password) {

		myAuthService.signup(email, password)
			.then(res => needsProfile(res.data._id))
			.catch(err => toast.error(err.response.data.errorMessage));
	}

	function submitAuthForm(e) {
		e.preventDefault();
		const { email, password, action } = authFormState;

		if (action === 'LogIn') {
			loginAuthService(email, password);
		}
		else if (action === 'SignUp') {
			signupAuthService(email, password);
		}
	}

	function handleChange(e) {
		const { value, name } = e.target;
		const { action } = e.target.dataset;
		setAuthFormState({
			...authFormState, [name]: value, action
		});
	}

	return (
		<>
				<div className="auth-form-title">
					<h2>{type === "SignUp" ? "Create Account" : "Please Log In"}</h2>
				</div>
				<form onSubmit={(e) => submitAuthForm(e)}>

					<div className="form-group">
						<label htmlFor="email-input">Email</label>
						<input type="email" id="email-input" name="email" data-action={type} onChange={(e) => handleChange(e)} />
					</div>

					<div className="form-group">
						<label htmlFor="password-input">Password</label>
						<input type="password" id="password-input" name="password" autoComplete="on" data-action={type} onChange={(e) => handleChange(e)} />
					</div>

					<button type="submit"> {type}</button>
				</form>
		</>
	);
}

export default AuthForm;