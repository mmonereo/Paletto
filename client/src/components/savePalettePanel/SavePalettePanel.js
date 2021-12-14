import './SavePalettePanel.css';
import { useState, useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import SavePaletteForm from '../savePaletteForm/SavePaletteForm';


function SavePalettePanel(props) {

	const {colorState} = useContext(ColorContext);

	const [showSavePaletteState, setShowSavePaletteState] = useState(false);

	function showSavePalette(e) {
		setShowSavePaletteState(true);
	}

	function hideSavePalette(e) {
		setShowSavePaletteState(false);
	}

	function copyToClipboard() {
		const copyText = colorState.colorScheme.join(' ');
		navigator.clipboard.writeText(copyText);
	}

	return (
		<div className="save-palette-panel">

			<div className="show-form-btn">
				<button onClick={showSavePalette}>Save Palette</button>
			</div>

			<div className="copy-btn">
				<button onClick={copyToClipboard}>Copy to Clipboard</button>
			</div>

			{showSavePaletteState ? <SavePaletteForm hideSavePalette={hideSavePalette} /> : null}
		</div>
	);
}

export default SavePalettePanel;