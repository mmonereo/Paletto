import './SavePaletteForm.css';
import { useState, useContext, useEffect } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { UserContext } from '../../contexts/UserContext';
import PalettesService from '../../services/palettes.service';

const myPalettesService = new PalettesService();

function SavePaletteForm({ hideSavePalette }) {

	const { colorState } = useContext(ColorContext);
	const { userState } = useContext(UserContext);

	useEffect(() => { updateState() }, [colorState]);

	const [paletteState, setPaletteState] = useState({
		count: colorState.count,
		mode: colorState.mode,
		sourceColor: colorState.sourceColor,
		colors: colorState.colorScheme,
		creator: userState._id
	});

	function handleChange(e) {
		const { value, name } = e.target;
		setPaletteState({
			...paletteState, [name]: value
		});
	}

	function updateState() {
		setPaletteState({
			...paletteState,
			count: colorState.count,
			mode: colorState.mode,
			colors: colorState.colorScheme,
			sourceColor: colorState.sourceColor,
		});
	}

	function submitSavePaletteForm(e) {
		e.preventDefault();
		myPalettesService.savePalette(paletteState)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}

	return (
		<div className="save-palette-form">
			<form onSubmit={(e) => submitSavePaletteForm(e)}>

				<div className="form-group">
					<label htmlFor="palette-name-input">Name</label>
					<input type="text" id="name-input" name="name" onChange={(e) => handleChange(e)} />
				</div>

				<div className="form-group">
					<label htmlFor="palette-tag-input">Tags</label>
					<input type="text" id="palette-tag-input" name="tags" onChange={(e) => handleChange(e)} />
				</div>
				<button type="submit">Save</button>
				<button type="button" onClick={() => hideSavePalette()}> Close </button>
			</form>
		</div>
	);
}

export default SavePaletteForm;