import axios from 'axios'

class PalettesService {
	constructor() {
		this.axiosApp = axios.create({
			baseURL: 'http://localhost:5000/palettes',
			withCredentials: true
		})
	}

	save = (palette) => {
		const {name, colors, count, mode, tags, creator} = palette
		this.axiosApp.get("/save", { name, colors, count, mode, tags, creator })
	}

	latest = () => this.axiosApp.get("/login", { username, password })
	logout = () => this.axiosApp.get("/logout")
	loggedUser = () => this.axiosApp.get("/loggedin")
}

export default PalettesService