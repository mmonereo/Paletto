import './MockCard.css';
import {useContext} from 'react';
import RoundButton from '../../elements/roundButton/RoundButton';
import { SandBoxContext } from '../../contexts/SandBoxContext';


function MockCard({style}){

	const {sandBoxState, setSandBoxState} = useContext(SandBoxContext);



	return(
		<div className="mock-card" style={{backgroundColor: sandBoxState.color1, color: sandBoxState.textcolor}}>
			<div className="mock-card-header" style={{ backgroundColor: sandBoxState.color2}}>
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

export default MockCard ;