import './OptionSelect.css';

function OptionSelect({value}){
	return(
		<option value={value}> {value}</option>
	);	
}

export default OptionSelect;