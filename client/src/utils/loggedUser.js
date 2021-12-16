import AuthService from '../services/auth.service';

async function loggedUser() {

	const myAuthService = new AuthService();
	
	const user = await myAuthService.loggedUser()
	return user;
}

export default loggedUser;