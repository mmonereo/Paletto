import './InputScheme.css';

function InputScheme({schemeOnClick}) {
	return(
		<div className="input-scheme">
			<input className="scheme-input-btn"
			type="button"
			value="Generate Palette"
			onClick={()=>schemeOnClick()}>
			</input>
		</div>
	);
}

export default InputScheme;