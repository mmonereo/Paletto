import './AuthModal.css';
import {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

function AuthModal({type, closeModal, handleChange}){

	const [userState, setUserState] = useContext(UserContext);


	return (
		<div className="auth-modal">
			<div className="auth-modal-content">
				<div className="auth-modal-title">
					<h2>{type === "SignUp" ? "Create Account" : "Please Log In"}</h2>
				</div>
				<form>

					<div className="form-group">
						<label htmlFor="email-input">Email</label>
						<input type="email" id="email-input" name="email" onChange={(e)=>handleChange(e)}/>
					</div>

					<div className="form-group">
						<label htmlFor="password-input">Password</label>
						<input type="password" id="password-input" name="password" onChange={(e)=>handleChange(e)}/>
					</div>

					<button type="submit">{type === "SignUp" ? "Sign Up" : "Log In"}</button>
					<button type="button" id={type} onClick={(e)=>closeModal(e)}>Close</button>
				</form>
			</div>
		</div>
	);
}

export default AuthModal;