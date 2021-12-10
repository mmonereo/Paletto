import { useContext, useEffect } from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import { ColorContext } from '../../contexts/ColorContext';
import SandBoxForm from '../sandBoxForm/SandBoxForm';
import SandBoxPanel from '../sandBoxPanel/SandBoxPanel';

import './SandBox.css';


function SandBox(){

	const { colorState } = useContext(ColorContext);
	const { sandBoxState, setSandBoxState } = useContext(SandBoxContext);


	useEffect(() => {} , [sandBoxState.bgColor]);

	return(
		<>
			<div className="sandbox" style={{backgroundColor: sandBoxState.bgColor}}>
				
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