import './CellGrid.css';

import { useContext, useState, useEffect } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import { SandBoxContext } from '../../contexts/SandBoxContext';
import ColorCell from '../../elements/colorCell/ColorCell';
import { BG_COLORS } from '../../constants';

function CellGrid({label, selectedColor}) {
	
	const { colorState} = useContext(ColorContext);

	const {colorScheme}  = colorState

	const { sandBoxState, setSandBoxState } = useContext(SandBoxContext);

	const [selectedColorState, setSelectedColorState] = useState(selectedColor)

	const key = label ? label.split(' ').join('') : null

	useEffect(() => {
		updateSandBox()
	}, [selectedColorState])

	

	function colorCellOnClick(e) { 
		const color = e.target.dataset.color
		setSelectedColorState(color);
	}

	function updateSandBox(){
		setSandBoxState({...sandBoxState, [key]: selectedColorState})
	}
	
	
	return(
		<>	
			{label ? <p>{label}</p> : null}
			<div className="cell-grid" data-selectedcolor={selectedColorState}>
				{ colorScheme.length > 0 && colorScheme.map((color, index) => {
					return <ColorCell key={index} color={color} hover={true} colorCellOnClick={colorCellOnClick}/>
				})}
				{label === 'bg color' ? BG_COLORS.map((color, index) => {
					return <ColorCell key={index} color={color} hover={true} colorCellOnClick={colorCellOnClick} />
				}) : null}
			</div>
		</>
	);
}

export default CellGrid;