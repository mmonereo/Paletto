import './MockBootstrapButton.css';

import { useContext } from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';

function MockBootstrapButton({ text, buttonStyle }) {

	const { sandBoxState } = useContext(SandBoxContext);

	const mainStyle = {
		backgroundColor: sandBoxState.color1,
		color: sandBoxState.textcolor,
	}

	return (
		<button className="mock-bootstrap-button" style={buttonStyle ? buttonStyle : mainStyle}>
			{text}
		</button>
	)
}

export default MockBootstrapButton;