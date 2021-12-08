import './UserProfileModal.css';
import {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

function UserProfileModal({type}) {

	const { userState, setUserState } = useContext(UserContext);

	function handleChange(e) {
		const { value, name } = e.target;
		setUserState({
			...userState, [name]: value
		});
	}


	return(
		<div className="profile-modal">
			<div className="profile-modal-content">
				<div className="profile-modal-title">
					<h2>{type ==="Create" ? "Create your Profile" : "Update your Profile" }</h2>
				</div>
				<form onSubmit={(e) => submitAuthModal(e)}>

					<div className="form-group">
						<label htmlFor="username-input">Username</label>
						<input type="email" id="email-input" name="username" onChange={(e) => handleChange(e)} />
					</div>

					<div className="form-group">
						<label htmlFor="profileImg-input">Password</label>
						<input type="password" id="profileImg-input" name="password" autoComplete="on"  onChange={(e) => handleChange(e)} />
					</div>

					<button type="submit">{type} Profile</button>
					<button type="button" id={type} onClick={(e) => closeModal(e)}>Close</button>
				</form>
			</div>
		</div>
	);
}

export default UserProfileModal;