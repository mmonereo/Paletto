import "./ColorPicker.css";
import { HexColorPicker } from "react-colorful";
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import ColorCell from "../../elements/colorCell/ColorCell";



function ColorPicker() {

	const {colorState, setColorState} = useContext(ColorContext);

	const {sourceColor} = colorState;

	function setPickerColor(color) {
		setColorState({ ...colorState, sourceColor: color });
	}

	return (
		<div className="color-picker">
			<HexColorPicker color={sourceColor} onChange={(color)=>setPickerColor(color)}  />

			<div className="sample-picker">
				<ColorCell color={sourceColor} />
				<span>Current color is {sourceColor} </span>
			</div>

		</div>
	);
}

export default ColorPicker;