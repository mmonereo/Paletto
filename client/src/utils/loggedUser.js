import AuthService from '../services/auth.service';

async function loggedUser() {

	const myAuthService = new AuthService();
	
	const user = await myAuthService.loggedUser()
	console.log("user en logged util", user)
	return user;
}

export default loggedUser;