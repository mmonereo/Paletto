import './Social.css';
import PaletteNav from '../../components/paletteNav/PaletteNav';
import PalettesList from '../../components/palettesList/PalettesList';
import { UserContext } from '../../contexts/UserContext';
import { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PalettesService from '../../services/palettes.service';
import loggedUser from '../../utils/loggedUser';
import toast from 'react-hot-toast';

const myPalettesService = new PalettesService();

function Social() {

	const { userState, setUserState } = useContext(UserContext);
	
	const [favoritePalettesState, setFavoritePalettesState] = useState([]);

	const [latestPalettesState, setLatestPalettesState] = useState([]);

	const [byTagState, setByTagState] = useState([]);

	const history = useHistory();

	useEffect(() => {
		//CR
		loggedUser()
			.then(currentUser => {setCurrentUser(currentUser.data)})
			.catch(err => {
				redirectToLanding();
				toast.error(err.response.data.errorMessage);
			})
	}, []);

	
	useEffect(() => { 
		getFavoritePalettes()
		getLatestPalettes()
	}, [userState._id]);

	function redirectToLanding() {
		history.push('/');
	}

	function getFavoritePalettes() {
		myPalettesService.getFavorites(userState._id)
			.then(res => {
				setFavoritePalettesState(res.data.favorites)
				console.log(res.data.favorites)
			})
			.catch(err => toast.error("error getting favorites"));
	}

	function getLatestPalettes() {
		myPalettesService.getLatest()
			.then(res => setLatestPalettesState(res.data))
			.catch(err => toast.error("error getting latest palettes"));
	}

	function setCurrentUser(user) {
		setUserState({ ...user });
	}

	function onClickTag(e, tag) {

		myPalettesService.getByTag(tag)
			.then(res => setByTagState(res.data))
			.catch(err => console.log(err));
	}

	return (
		<div className="social-container">

			<div className="social-nav">
				<PaletteNav />
			</div>

			<div className="social-content">
				<PalettesList header="Your Favorites" palettes={favoritePalettesState} onClickTag={onClickTag}/>
				<PalettesList header="Latest" palettes={latestPalettesState} onClickTag={onClickTag}/>
				<PalettesList header="Click on a tag to Search" palettes={byTagState} onClickTag={onClickTag}/>
			</div>

		</div>
	);
}

export default Social;