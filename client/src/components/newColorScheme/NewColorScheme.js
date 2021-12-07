import './NewColorScheme.css';
import ColorPicker from '../colorPicker/ColorPicker';
import ColorPickerForm from "../colorPickerForm/ColorPickerForm";
import InputScheme from "../../elements/inputScheme/InputScheme";
import CellGrid from '../../components/cellGrid/CellGrid';

function NewColorScheme({ schemeOnClick }) {
	return(
		<div className="new-color-scheme">
			<ColorPicker />
			<div className="color-picker-inputs">
			<ColorPickerForm />
			<InputScheme schemeOnClick={schemeOnClick} />
			</div>
			<CellGrid />
		</div>
	);
}

export default NewColorScheme;