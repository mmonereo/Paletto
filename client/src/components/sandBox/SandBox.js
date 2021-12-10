import { useContext } from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import { ColorContext } from '../../contexts/ColorContext';
import SandBoxForm from '../sandBoxForm/SandBoxForm';
import SandBoxPanel from '../sandBoxPanel/SandBoxPanel';

import './SandBox.css';


function SandBox(){

	const { colorState } = useContext(ColorContext);
	const {sandBoxState, setSandBoxstate} = useContext(SandBoxContext);

	const bgColor = colorState.colorScheme.length ? colorState.colorScheme[0].hex.value : '#FFF';

	const style = { backgroundColor: bgColor };

	return(
		<>
			<div className="sandbox" style={style}>
				
			</div>
			
			{colorState.colorScheme.length ? 
				<div className="sandbox-panel">
					<SandBoxPanel />
					<SandBoxForm />
				</div> : null}
		</>
	);
}

export default SandBox;