import './MockCard.css';
import {useContext} from 'react';
import {ColorContext} from '../../contexts/ColorContext';

import RoundButton from '../../elements/roundButton/RoundButton';


function MockCard({count}){

	const {colorState, setColorState} = useContext(ColorContext);



	return(
		<div className="mock-card" style={style}>
			<div className="mock-card-header">
				<h3>Mock Card</h3>
			</div>
			<div className="mock-card-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
			</div>
			<div className="mock-card-footer">
				<RoundButton text={"Details"} bgColor={secondaryColor}></RoundButton>
			</div>
		</div>
	);
}

export default MockCard ;