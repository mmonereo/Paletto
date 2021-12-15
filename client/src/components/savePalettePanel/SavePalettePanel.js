import './SavePalettePanel.css';
import { useState, useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import SavePaletteForm from '../savePaletteForm/SavePaletteForm';
import toast from 'react-hot-toast';


function SavePalettePanel() {

	const {colorState} = useContext(ColorContext);

	const [showSavePaletteState, setShowSavePaletteState] = useState(false);

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

	return (
		<>
			<div className="save-palette-panel">

				<div className="show-form-btn">
					<button onClick={showSavePalette}>Save Palette</button>
				</div>

				<div className="copy-btn">
					<button onClick={copyToClipboard}>Copy Palette</button>
				</div>

			</div>
			{showSavePaletteState ? <SavePaletteForm hideSavePalette={hideSavePalette} /> : null}
		</>
	);
}

export default SavePalettePanel;