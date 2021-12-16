import './MockCardBootstrap.css';
import { useContext } from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import MockBootstrapButton from '../../elements/mockBootstrapButton/MockBootstrapButton';

function MockCardBootstrap(){


	const { sandBoxState } = useContext(SandBoxContext);

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
		<div class="card" style={mainStyle}>
			<div class="card-body">
				<h3 class="card-title" style={headerStyle}>Card title</h3>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<MockBootstrapButton text='Details' buttonStyle={buttonStyle}/>
			</div>
		</div>
	);
}

export default MockCardBootstrap;