import AuthService from '../services/auth.service';

async function loggedUser() {

	const myAuthService = new AuthService();
	
	const user = await myAuthService.loggedUser().then(response => response.data)

	return user;
}

export default loggedUser;