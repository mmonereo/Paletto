import axios from 'axios'

class PalettesService {
	constructor() {
		this.axiosApp = axios.create({
			baseURL: 'http://localhost:5000/api/palettes',
			withCredentials: true
		})
	}

	save = ({ name, colors, count, mode, tags, creator }) => {
		this.axiosApp.get("/save", { name, colors, count, mode, tags, creator })
	}

	latest = () => this.axiosApp.get("/login", { username, password })
	logout = () => this.axiosApp.get("/logout")
	loggedUser = () => this.axiosApp.get("/loggedin")
}

export default PalettesService