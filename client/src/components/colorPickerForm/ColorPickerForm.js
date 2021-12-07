import './ColorPickerForm.css';
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import OptionSelect from '../../elements/optionSelect/OptionSelect';

function ColorPickerForm(){

	const { colorState, setColorState } = useContext(ColorContext);

	function handleChange(e) {
		let { name, value } = e.currentTarget;
		setColorState({ ...colorState, [name]: value })
	}

	const countSelect = new Array(7);

	for(let i = 0; i < countSelect.length; i++){
		countSelect[i] = i + 2;
	}

	const modeSelect = ["analogic", "analogic-complement", "complement", "monochrome"]

	return(
		<div className="color-picker-form">
			<form>

				<label htmlFor="mode-select" >mode</label>
					<select id="mode-select" name="mode" onChange={(e) => handleChange(e)}>
						{modeSelect.map((elm) => <OptionSelect key={elm} value={elm}></OptionSelect>)}
					</select>

				<label htmlFor="count-select">count</label>
					<select id="count-select" name="count" onChange={(e) => handleChange(e)}>
						{countSelect.map((elm,i) => <OptionSelect key={i} value={elm}></OptionSelect>)}
					</select>

			</form>
		</div>
	);
}

export default ColorPickerForm;