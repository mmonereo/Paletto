import './Social.css';
import PaletteNav from '../../components/paletteNav/PaletteNav';
import PalettesList from '../../components/palettesList/PalettesList';
import { UserContext } from '../../contexts/UserContext';
import { useEffect, useContext, useState } from 'react';
import PalettesService from '../../services/palettes.service';
import loggedUser from '../../utils/loggedUser';

const myPalettesService = new PalettesService();

function Social() {

	const { userState, setUserState } = useContext(UserContext);

	const [favoritePalettesState, setFavoritePalettesState] = useState([]);

	const [latestPalettesState, setLatestPalettesState] = useState([]);

	useEffect(() => {
		//CR
		loggedUser()
			.then(currentUser => setCurrentUser(currentUser.data))
			.catch(err => console.log(err))
	}, []);

	useEffect(() => { 
		getFavoritePalettes()
		getLatestPalettes()
	}, [userState._id]);

	function getFavoritePalettes() {
		myPalettesService.getFavorites(userState._id)
			.then(res => setFavoritePalettesState(res.data.favorites))
			.catch(err => console.log(err));
	}

	function getLatestPalettes() {
		myPalettesService.getLatest()
			.then(res => setLatestPalettesState(res.data))
			.catch(err => console.log(err));
	}

	function setCurrentUser(user) {
		console.log("currentUser in social", user)
		setUserState({ ...user });
	}

	return (
		<div className="social-container">

			<div className="social-nav">
				<PaletteNav />
			</div>

			<div className="social-content">
				<PalettesList header="Your Favorites" palettes={favoritePalettesState} />
				<PalettesList header="Latest" palettes={latestPalettesState} />
			</div>

		</div>
	);
}

export default Social;