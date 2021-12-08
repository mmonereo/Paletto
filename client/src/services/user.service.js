import axios from 'axios';


class UserService {

	constructor(_id) {
		this.axiosApp = axios.create({
			baseURL: `http://localhost:5000/user/${_id}`,
			withCredentials: true
		})
	}

	editProfile = (username) => {
		this.axiosApp.put('/edit-profile', {username})
	}

}

export default UserService