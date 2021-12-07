
import { HexColorPicker } from "react-colorful";
import "./ColorPicker.css";

import ColorPickerForm from "../colorPickerForm/ColorPickerForm";
import ColorCell from "../../elements/colorCell/ColorCell";
import InputScheme from "../../elements/inputScheme/InputScheme";

function ColorPicker({color, setPickerColor, schemeOnClick, handleChange}) {
	return (
		<div className="color-picker">
			<HexColorPicker color={color} onChange={(color)=>setPickerColor(color)}  />

			<div className="sample-picker">
				<ColorCell color={color} />
				<span>Current color is {color}</span>
			</div>
			<ColorPickerForm handleChange={handleChange}/>
			<InputScheme schemeOnClick={schemeOnClick}/>
		</div>
	);
}

export default ColorPicker;