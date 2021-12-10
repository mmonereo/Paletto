import './OptionSelect.css';

function OptionSelect({value, totalColors}){
	return(
		<option value={value} data-total-colors={totalColors ? totalColors : null}>{value}</option>
	);	
}

export default OptionSelect;