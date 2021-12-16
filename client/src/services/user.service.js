import axios from 'axios';


class UserService {

	constructor(_id) {
		this.axiosApp = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/user/${_id}`,
			withCredentials: true
		})
		this._id = _id;
	}

	editProfile = (username, profileImg) => {
		return this.axiosApp.put('/edit-profile', {username, profileImg, _id: this._id})
	}

}

export default UserService