import { useState, useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import MockCard from '../mockCard/MockCard';
import './SandBox.css';


function SandBox(){

	const [sandBoxState, setState] = useState();
	const { colorState } = useContext(ColorContext);

	const bgColor = colorState.colorScheme.length ? colorState.colorScheme[0].hex.value : '#FFF';

	const style = { backgroundColor: bgColor };

	return(
		<div className="sandbox" style={style}>
			<MockCard />
		</div>
	);
}

export default SandBox;