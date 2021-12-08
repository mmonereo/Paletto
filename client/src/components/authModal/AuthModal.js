import './AuthModal.css';
import {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

function AuthModal({type, closeModal, submitAuthModal}){

	const {userState, setUserState} = useContext(UserContext);

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