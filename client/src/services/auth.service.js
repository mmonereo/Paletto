import axios from 'axios'

class AuthService {
	constructor() {
		this.axiosApp = axios.create({
			baseURL: 'http://localhost:5000/auth',
			withCredentials: true
		})
	}

	signup = (username, password) => this.axiosApp.post("/signup", { username, password })
	login = (username, password) => this.axiosApp.post("/login", { username, password })
	logout = () => this.axiosApp.get("/logout")
	loggedUser = () => this.axiosApp.get("/loggedin")
}

export default AuthService