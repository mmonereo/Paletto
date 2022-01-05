import './NewColorScheme.css';
import ColorPicker from '../colorPicker/ColorPicker';
import ColorPickerForm from "../colorPickerForm/ColorPickerForm";
import InputScheme from "../../elements/inputScheme/InputScheme";
import CellGrid from '../../components/cellGrid/CellGrid';
import SavePalettePanel from '../../components/savePalettePanel/SavePalettePanel';

function NewColorScheme({ schemeOnClick, displaySavePanel }) {
	return(
		<div className="new-color-scheme">
			<ColorPicker />
			<div className="color-picker-inputs">
			<ColorPickerForm />
			<InputScheme schemeOnClick={schemeOnClick} />
			</div>
			<CellGrid />
			{(displaySavePanel()) && <SavePalettePanel />}
		</div>
	);
}

export default NewColorScheme;