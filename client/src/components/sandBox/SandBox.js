import { useContext} from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import { ColorContext } from '../../contexts/ColorContext';
import SandBoxForm from '../sandBoxForm/SandBoxForm';
import SandBoxPanel from '../sandBoxPanel/SandBoxPanel';
import MockCard from '../mockCard/MockCard';
import MockCardGradient from '../mockCardGradient/MockCardGradient';

import './SandBox.css';


function SandBox(){

	const { colorState } = useContext(ColorContext);
	const { sandBoxState} = useContext(SandBoxContext);


	return(
		<>
			<div className="sandbox" style={{backgroundColor: sandBoxState.bgcolor}}>
				{sandBoxState.component === 'MockCard' ? <MockCard /> : null}
				{sandBoxState.component === 'MockCardGradient' ? <MockCardGradient /> : null}
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