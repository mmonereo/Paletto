import './CellGrid.css';

import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import ColorCell from '../../elements/colorCell/ColorCell';

function CellGrid({label}){
	
	const { colorState} = useContext(ColorContext);

	const { colorScheme } = colorState;
	
	return(
		<>	{label ? <p>{label}</p> : null}
			<div className="cell-grid">
				{colorScheme?.map((color, index) => {
					return <ColorCell key={index} color={color.hex.value}/>
				})}
			</div>
		</>
	);
}

export default CellGrid;