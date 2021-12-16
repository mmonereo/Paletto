import './SandBoxForm.css';
import { useContext } from 'react';
import {SandBoxContext} from '../../contexts/SandBoxContext';
import { MOCK_SELECT } from "../../constants";
import OptionSelect from '../../elements/optionSelect/OptionSelect';


function SandBoxForm(){

	const { setSandBoxState } = useContext(SandBoxContext);


	function handleChange(e) {
		const mockComponentValue = [...e.target.options].filter(o => o.selected).map(o => o.value);
		const mockComponent = MOCK_SELECT.filter(elm => elm.component === mockComponentValue[0])
	
		setSandBoxState(...mockComponent);
	}

	return(
		<div className="sandbox-form">
			<form>

				<label htmlFor="mock-select" >select mock component</label>
				<select id="mock-select" name="mode" onChange={(e) => handleChange(e)}>
					{MOCK_SELECT.map((elm, index) =>  <OptionSelect key={index} value={`${elm.component}`}/>)}
				</select>

			</form>
		</div>
	);
}

export default SandBoxForm;