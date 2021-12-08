import axios from 'axios'

class AuthService {

	constructor() {
		this.axiosApp = axios.create({
			baseURL: 'http://localhost:5000/api/auth',
			withCredentials: true
		})
	}

	signup = (email, password) => this.axiosApp.post("/signup", { email, password })
	login = (email, password) => this.axiosApp.post("/login", { email, password })
	logout = () => this.axiosApp.get("/logout")
	loggedUser = () => this.axiosApp.get("/loggedin")
}

export default AuthService