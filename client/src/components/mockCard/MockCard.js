import './MockCard.css';
import {useContext} from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import MockButton from '../../elements/mockButton/MockButton';


function MockCard(){

	const {sandBoxState} = useContext(SandBoxContext);

	const mainStyle = {
		backgroundColor: sandBoxState.color1,
		color: sandBoxState.textcolor,
		borderColor: sandBoxState.color3
	}

	const headerStyle = {
		backgroundColor: sandBoxState.color2,
		borderColor: sandBoxState.color3
	}

	const buttonStyle = {
		backgroundColor: sandBoxState.color2,
		color: sandBoxState.textcolor,
		borderColor: sandBoxState.color3
	}
	


	return(
		<div className="mock-card" style={mainStyle}>

			<div className="mock-card-header" style={headerStyle}>
				<h3>Mock Card</h3>
			</div>

			<div className="mock-card-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
			</div>

			<div className="mock-card-footer">
				<MockButton text='Details' buttonStyle={buttonStyle}/>
			</div>
		</div>
	);
}

export default MockCard ;