import './MockCardGradient.css';
import { useContext } from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';


function MockCardGradient() {

	const { sandBoxState } = useContext(SandBoxContext);

	const mainStyle = {
		background: `linear-gradient(${sandBoxState.color1}, ${sandBoxState.color2})`,
		color: sandBoxState.textcolor,
	}

	const headerStyle = {
		backgroundColor: sandBoxState.color3,
	}



	return (
		<div className="mock-card-gradient" style={mainStyle}>
			<div className="mock-card-gradient-header" style={headerStyle}>
				<h3>Mock Card</h3>
			</div>
			<div className="mock-card-gradient-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
			</div>
			<div className="mock-card-gradient-footer">
			</div>
		</div>
	);
}

export default MockCardGradient;