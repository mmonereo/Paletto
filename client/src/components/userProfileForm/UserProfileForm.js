import './UserProfileForm.css';

import { useState } from 'react';
import { useHistory } from 'react-router';
import UploadService from '../../services/upload.service';
import UserService from '../../services/user.service';
import toast from 'react-hot-toast';


const myUploadService = new UploadService();

function UserProfileForm({ type, _id }) {

	const [profileFormState, setprofileFormState] = useState({
		username: '',
		profileImg: '',
		uploaded: false
	});

	const myUserService = new UserService(_id);

	const history = useHistory();

	function redirectToPalettes() {
		history.push('/palettes');
	}

	function editProfile() {
		const { username, profileImg, uploaded } = profileFormState;

		if (uploaded){
			myUserService.editProfile(username, profileImg)
				.then(res => redirectToPalettes())
				.catch(err => console.log(err));
		}
	}

	function handleChange(e) {
		const { value, name } = e.target;
		setprofileFormState({
			...profileFormState, [name]: value
		});
	}

	function handleImgChange(e) {
		console.log(e.target.files[0]);

		const uploadData = new FormData()
		uploadData.append('imageData', e.target.files[0])

		myUploadService.uploadImg(uploadData)
			.then(res => {
				const { cloudinary_url } = res.data;
				setprofileFormState({
					...profileFormState, profileImg: cloudinary_url, uploaded: true
				})
				toast.success('Image Uploaded!');
			})
			.catch(err => console.log(err));
	}

	function submitProfileForm(e) {
		e.preventDefault();
		editProfile();
	}


	return (
		<div className="profile-form">

				<div className="profile-form-title">
					<h2>{type === "Create" ? "Create your Profile" : "Update your Profile"}</h2>
				</div>
				<form onSubmit={(e) => submitProfileForm(e)}>

					<div className="form-group">
						<label htmlFor="username-input">Username</label>
						<input type="text" id="username-input" name="username" onChange={(e) => handleChange(e)} />
					</div>

					<div className="form-group">
						<label htmlFor="imageData-input">Choose you Profile Pic</label>
						<input type="file" id="imageData-input" name="imageData" onChange={(e) => handleImgChange(e)} />
					</div>

					<div className="profile-form-buttons">
						<button type="submit">{type} Profile</button>
						<button type="button" id={type} onClick={() => redirectToPalettes()}>Dismiss</button>
					</div>
				</form>
		</div>
	);
}

export default UserProfileForm;