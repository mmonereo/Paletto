import './SavePalettePanel.css';
import { useState, useContext, useEffect } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { UserContext } from '../../contexts/UserContext';
import PalettesService from '../../services/palettes.service';
import SavePaletteForm from '../savePaletteForm/SavePaletteForm';
import toast from 'react-hot-toast';

const myPalettesService = new PalettesService();

function SavePalettePanel() {

	const {colorState} = useContext(ColorContext);

	const {userState} = useContext(UserContext);

	const [showSavePaletteState, setShowSavePaletteState] = useState(false);

	const [favPalettesState, setFavPalettesState] = useState({
		favPalettes: [],
		isFav: false,
		loading: true
	});

	useEffect(() => { getFavoritePalettes() }, [userState._id]);

	function showSavePalette() {
		setShowSavePaletteState(true);
	}

	function hideSavePalette() {
		setShowSavePaletteState(false);
	}

	function copyToClipboard() {
		const copyText = colorState.colorScheme.join(' ');
		navigator.clipboard.writeText(copyText);
		toast('Copied to clipboard');
	}

	function addFavOnClick(){
		const userId = userState._id;
		const palette = colorState;

		myPalettesService.addFavorite(userId, palette)
			.then(res => {
				console.log(res);
				toast('Added to favorites');
			})
			.catch(err => {
				console.log(err);
			});
	}

	function removeFavOnClick(){
		const userId = userState._id;
		const palette = colorState._id;

		myPalettesService.removeFavorite(userId, palette)
			.then(res => {
				console.log(res);
				toast('Removed from favorites');
			})
			.catch(err => {
				console.log(err);
			});
	}

	function getFavoritePalettes() {
		myPalettesService.getFavorites(userState._id)
			.then(res => {
				console.log("llegaron los favs", res.data.favorites);
				console.log("resultado de isFav", isFavorite(res.data.favorites));
				setFavPalettesState({
					favPalettes: res.data.favorites,
					isFav: isFavorite(res.data.favorites) ? true : false,
					loading: false
				})
			})
			.catch(err => console.log(err));
	}

	function isFavorite(favPalettes){
		const favIds = favPalettes.map(fav => fav._id);
		return favIds.includes(colorState._id);
	}

	return (
		<>
			<div className="save-palette-panel">
				
				{!colorState._id && 
				<div className="show-form-btn">
					<button onClick={showSavePalette}>Save Palette</button>
				</div>}

				{(colorState._id && !favPalettesState.isFav && !favPalettesState.loading) &&
					<div className="add-fav-btn">
						<button onClick={addFavOnClick}>Save Palette</button>
					</div>}

{/* 				{(colorState._id && favPalettesState.isFav && !favPalettesState.loading) &&
					<div className="add-fav-btn">
						<button onClick={removeFavOnClick}> Remove Palette</button>
					</div>} */}

				<div className="copy-btn">
					<button onClick={copyToClipboard}>Copy Palette</button>
				</div>

			</div>
			{showSavePaletteState ? <SavePaletteForm hideSavePalette={hideSavePalette} /> : null}
		</>
	);
}

export default SavePalettePanel;