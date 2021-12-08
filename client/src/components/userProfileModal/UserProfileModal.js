import './UserProfileModal.css';
import {useContext} from 'react';
import { useHistory } from 'react-router';
import {UserContext} from '../../contexts/UserContext';
import UserService from '../../services/user.service';

function UserProfileModal({type}) {

	const { userState, setUserState } = useContext(UserContext);

	const myUserService = new UserService(userState._id);

	const history = useHistory();

	function redirectToPalettes() {
		history.push('/palettes');
	}

	function editProfile(){
		const {username} = userState;
		myUserService.editProfile(username)
			.then(res => {
				console.log(res)
				redirectToPalettes();
			})
			.catch(err=>{
				console.log(err)
			});
	}

	function handleChange(e) {
		const { value, name } = e.target;
		setUserState({
			...userState, [name]: value
		});
	}

	function submitProfileModal(e) {
		e.preventDefault();
		editProfile();
	}


	return(
		<div className="profile-modal">
			<div className="profile-modal-content">
				<div className="profile-modal-title">
					<h2>{type ==="Create" ? "Create your Profile" : "Update your Profile" }</h2>
				</div>
				<form onSubmit={(e) => submitProfileModal(e)}>

					<div className="form-group">
						<label htmlFor="username-input">Username</label>
						<input type="email" id="email-input" name="username" onChange={(e) => handleChange(e)} />
					</div>

					<button type="submit">{type} Profile</button>
					<button type="button" id={type} onClick={() => redirectToPalettes()}>Dismiss</button>
				</form>
			</div>
		</div>
	);
}

export default UserProfileModal;