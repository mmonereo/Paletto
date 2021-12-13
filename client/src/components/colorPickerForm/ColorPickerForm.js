import './ColorPickerForm.css';
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import OptionSelect from '../../elements/optionSelect/OptionSelect';
import { COUNT_SELECT, MODE_SELECT } from "../../constants";

function ColorPickerForm(){

	
	const { colorState, setColorState } = useContext(ColorContext);


	function handleChange(e) {
		let { name, value } = e.currentTarget;
		setColorState({ ...colorState, [name]: value })
	}


	return(
		<div className="color-picker-form">
			<form>

				<label htmlFor="mode-select" >mode</label>
				<select id="mode-select" name="mode" onChange={(e) => handleChange(e)} defaultValue={colorState.mode}>
						{MODE_SELECT.map((elm) => <OptionSelect key={elm} value={elm}></OptionSelect>)}
				</select>

				<label htmlFor="count-select">count</label>
				<select id="count-select" name="count" onChange={(e) => handleChange(e)} defaultValue={colorState.count}>
						{COUNT_SELECT.map((elm,i) => <OptionSelect key={i} value={elm}></OptionSelect>)}
					</select>

			</form>
		</div>
	);
}

export default ColorPickerForm;