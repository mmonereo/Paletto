import axios from 'axios';


class UploadService {

	constructor() {
		this.axiosApp = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/upload`,
			withCredentials: true
		})
	}

	uploadImg = (imageData) => {
		return this.axiosApp.post('/image', imageData )
	}

}

export default UploadService