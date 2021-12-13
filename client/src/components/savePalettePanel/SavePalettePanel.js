import './SavePalettePanel.css';
import {useState} from 'react';
import SavePaletteForm from '../savePaletteForm/SavePaletteForm';


function SavePalettePanel(props) {

	const [showSavePaletteState, setShowSavePaletteState] = useState(false);

	function showSavePalette(e){
		setShowSavePaletteState(true);
	}

	function hideSavePalette(e){
		setShowSavePaletteState(false);
	}

	return (
		<div className="save-palette-panel">
			<div className="show-form-btn">
				<button onClick={showSavePalette}>Save Palette</button>
			</div>
			{showSavePaletteState ? <SavePaletteForm hideSavePalette={hideSavePalette}/> : null}
		</div>
	);
}

export default SavePalettePanel;