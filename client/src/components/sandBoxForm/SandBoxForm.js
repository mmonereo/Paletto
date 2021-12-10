import './SandBoxForm.css';
import { useContext } from 'react';
import {SandBoxContext} from '../../contexts/SandBoxContext';
import { MOCK_SELECT } from "../../constants";
import OptionSelect from '../../elements/optionSelect/OptionSelect';


function SandBoxForm(){

	const { setSandBoxState} = useContext(SandBoxContext);


	function handleChange(e) {
		const mockComponent = [...e.target.options].filter(o => o.selected).map(o => o.value);
		const totalColors = [...e.target.options].filter(o => o.selected).map(o => o.dataset.totalColors);

		setSandBoxState({ mockComponent, totalColors});
	}

	return(
		<div className="sandbox-form">
			<form>

				<label htmlFor="mock-select" >Choose Mock</label>
				<select id="mock-select" name="mode" onChange={(e) => handleChange(e)}>
					{MOCK_SELECT.map((elm, index) =>  <OptionSelect key={index} value={elm.component} totalColors={elm.totalColors}/>)}
				</select>

			</form>
		</div>
	);
}

export default SandBoxForm;