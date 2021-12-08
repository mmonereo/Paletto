import './UserProfileModal.css';
import {useContext} from 'react';
import { useHistory } from 'react-router';
import {UserContext} from '../../contexts/UserContext';
import UploadService from '../../services/upload.service';
import UserService from '../../services/user.service';

const myUploadService = new UploadService();

function UserProfileModal({type}) {

	const { userState, setUserState } = useContext(UserContext);

	const myUserService = new UserService(userState._id);

	const history = useHistory();

	function redirectToPalettes() {
		history.push('/palettes');
	}

	function editProfile(){
		const {username, profileImg} = userState;

		myUserService.editProfile(username, profileImg)
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

	function handleImgChange(e) {
		console.log(e.target.files[0]);

		const uploadData = new FormData()
		uploadData.append('imageData', e.target.files[0])

		myUploadService.uploadImg(uploadData)
			.then(res => {
				console.log(res.data)
				const {cloudinary_url} = res.data;
				setUserState({
					...userState, profileImg: cloudinary_url
				})
			})
			.catch(err => {
				console.log(err)
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
						<input type="text" id="username-input" name="username" onChange={(e) => handleChange(e)} />
					</div>

					<div className="form-group">
						<label htmlFor="imageData-input">Choose you Profile Pic</label>
						<input type="file" id="imageData-input" name="imageData" onChange={(e) => handleImgChange(e)} />
					</div>

					<button type="submit">{type} Profile</button>
					<button type="button" id={type} onClick={() => redirectToPalettes()}>Dismiss</button>
				</form>
			</div>
		</div>
	);
}

export default UserProfileModal;