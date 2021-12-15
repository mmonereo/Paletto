import './PaletteNav.css'
import AuthService from '../../services/auth.service';
import { useHistory } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { ColorContext } from '../../contexts/ColorContext';
import { useContext } from 'react';
import defaultAvatar from '../../default-avatar.jpeg';




const myAuthService = new AuthService();

function PaletteNav(){

	const { userState, setUserState } = useContext(UserContext);

	const { setColorState } = useContext(ColorContext);

	const history = useHistory();

	function redirectToLanding() {
		history.push('/');
	}

	function redirectToSocial() {
		history.push('/social');
	}

	function redirectToPalettes() {
		resetColorState();
		history.push('/palettes');
	}

	function resetColorState() {
		setColorState({
			sourceColor: '#314820',
			mode: 'analogic',
			count: 2,
			colorScheme: []
		});
	}

	function handleLogout(){
		
		myAuthService.logout()
			.then(() => {
				setUserState({needsProfile: false});
				resetColorState();
				redirectToLanding();
			})
			.catch(err => {
				console.log(err);
			});
	}

	return(
		<nav className="palette-nav">

			<div className="palette-nav-img" style={userState ? { backgroundImage: `url(${userState.profileImg})` } : `url(${defaultAvatar})`}>
			</div> 


			<ul className="palette-nav-list">

				<li className="palette-nav-item">
					<input type="button" className="palette-nav-link" value={userState.username ? `${userState.username}` : `${userState.email}`} >
					</input>
				</li>

				<li className="palette-nav-item">
					<input type="button" className="palette-nav-link" value="Create Palette" onClick={() => redirectToPalettes()}>
					</input>
				</li>

				<li className="palette-nav-item">
					<input type="button" className="palette-nav-link" value="Social" onClick={() => redirectToSocial()}>
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