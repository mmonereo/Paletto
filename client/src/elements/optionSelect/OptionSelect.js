import './OptionSelect.css';

function OptionSelect({value}){
	return(
		<option style={{background: '#434240'}} value={value}> {value}</option>
	);	
}

export default OptionSelect;