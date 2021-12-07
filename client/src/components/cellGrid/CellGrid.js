import './CellGrid.css';

import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import ColorCell from '../../elements/colorCell/ColorCell';

function CellGrid(){
	
	const { colorState} = useContext(ColorContext);

	const { colorScheme } = colorState;
	
	return(
		<div className="cell-grid">
			{colorScheme?.map((color, index) => {
				return <ColorCell key={index} color={color.hex.value}/>
			})}
		</div>
	);
}

export default CellGrid;