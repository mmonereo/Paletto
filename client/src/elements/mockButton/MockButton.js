import './MockButton.css';

import { useContext } from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';

function MockButton({text, buttonStyle}){
	
	
	const { sandBoxState } = useContext(SandBoxContext);

	const mainStyle = {
		backgroundColor: sandBoxState.color1,
		color: sandBoxState.textcolor,
		borderColor: sandBoxState.color2
	}

	function handleClick(e) {
		e.preventDefault();
	}


	return(
		<button className="mock-button" style={buttonStyle ? buttonStyle : mainStyle} onClick={handleClick}>
			{text}
		</button>
	)
}

export default MockButton;