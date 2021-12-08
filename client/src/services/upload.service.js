import axios from 'axios';


class UploadService {

	constructor() {
		this.axiosApp = axios.create({
			baseURL: `http://localhost:5000/api/upload/`,
			withCredentials: true
		})
	}

	uploadImg = (imageData) => {
		return this.axiosApp.post('/image', imageData )
	}

}

export default UploadService