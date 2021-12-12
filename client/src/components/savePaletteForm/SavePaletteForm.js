import './SavePaletteForm.css';
import {useState, useContext} from 'react';
import {ColorContext} from '../../contexts/ColorContext';
import {UserContext} from '../../contexts/UserContext';
import PalettesService from '../../services/palettes.service';

const myPalettesService = new PalettesService();

function SavePaletteForm(){

	const {ColorState} = useContext(ColorContext);
	const {UserState} = useContext(UserContext);

	const [paletteState, setPaletteState] = useState({
		count: ColorState.count,
		mode: ColorState.mode,
		colors: ColorState.colorScheme.map(color => color.hex.value),
		creator: UserState._id
	});

	function handleChange(e) {
		const { value, name } = e.target;
		setPaletteState({
			...paletteState, [name]: value
		});
	}

	function submitSavePaletteForm(e) {
		e.preventDefault();
		myPalettesService.savePalette(paletteState);
	}

	return(
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

				<button type="submit"> {type}</button>
			</form>
		</div>
	);
}

export default SavePaletteForm;