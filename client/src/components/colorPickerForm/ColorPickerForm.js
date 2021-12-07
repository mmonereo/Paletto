import './ColorPickerForm.css';
import OptionSelect from '../../elements/optionSelect/OptionSelect';

function ColorPickerForm({handleChange}){

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