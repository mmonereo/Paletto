import './MockCardGradient.css';
import { useContext } from 'react';
import RoundButton from '../../elements/roundButton/RoundButton';
import { SandBoxContext } from '../../contexts/SandBoxContext';


function MockCardGradient() {

	const { sandBoxState } = useContext(SandBoxContext);



	return (
		<div className="mock-card" style={{ backgroundColor: `linear- gradient(to bottom, ${sandBoxState.color1} 48%, ${sandBoxState.color2} 86%)`, color: sandBoxState.textcolor, borderColor: sandBoxState.color3 }}>
			<div className="mock-card-header" style={{ backgroundColor: sandBoxState.color2, borderColor: sandBoxState.color3 }}>
				<h3>Mock Card</h3>
			</div>
			<div className="mock-card-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
			</div>
			<div className="mock-card-footer">
				<RoundButton text={"Details"}></RoundButton>
			</div>
		</div>
	);
}

export default MockCardGradient;