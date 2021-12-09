import './PaletteNav.css'
import AuthService from '../../services/auth.service';
import { useHistory } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';


const myAuthService = new AuthService();

function PaletteNav(){

	const { userState, setUserState } = useContext(UserContext);

	const history = useHistory();

	function redirectToLanding() {
		history.push('/');
	}

	function handleLogout(){
		
		myAuthService.logout()
			.then(() => {
				console.log('logged out');
				setUserState({needsProfile: false});
				redirectToLanding();
			})
			.catch(err => {
				console.log(err);
			});
	}

	return(
		<nav className="palette-nav">

			<div className="palette-nav-img" style={ userState ? {backgroundImage: `url(${userState.profileImg})`} : null}>
			</div>

			<ul className="palette-nav-list">

				<li className="palette-nav-item">
					<input type="button" className="palette-nav-link" value={ userState ? `${ userState.email }` : null} >
					</input>
				</li>

				<li className="palette-nav-item">
					<input type="button" className="palette-nav-link" value="LogOut" onClick={()=>handleLogout()}>
					</input>
				</li>

			</ul>
		</nav>
	);
}

export default PaletteNav;