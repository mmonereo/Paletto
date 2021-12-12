import { useContext, useEffect } from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import { ColorContext } from '../../contexts/ColorContext';
import SandBoxForm from '../sandBoxForm/SandBoxForm';
import SandBoxPanel from '../sandBoxPanel/SandBoxPanel';
import MockCard from '../mockCard/MockCard';

import './SandBox.css';


function SandBox(){

	const { colorState } = useContext(ColorContext);
	const { sandBoxState, setSandBoxState } = useContext(SandBoxContext);
	let style = { backgroundColor: sandBoxState.bgColor ? sandBoxState.bgColor : '#1D5C87'};


	useEffect(() => {console.log("bgcolor ha cambiaddo")} , [sandBoxState.bgColor]);

	return(
		<>
			<div className="sandbox" style={style}>
				{sandBoxState.component === 'MockCard' ? <MockCard /> : null}
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