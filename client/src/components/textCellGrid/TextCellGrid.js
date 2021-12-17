import './TextCellGrid.css';

import { useContext, useState, useEffect } from "react";
import { SandBoxContext } from '../../contexts/SandBoxContext';
import ColorCell from '../../elements/colorCell/ColorCell';
import {TEXT_COLORS} from '../../constants';

function TextCellGrid() {


	const { sandBoxState, setSandBoxState } = useContext(SandBoxContext);

	const [selectedColorState, setSelectedColorState] = useState(TEXT_COLORS[0]);

	const key = 'textcolor'

	useEffect(() => {
		updateSandBox()
	}, [selectedColorState])



	function colorCellOnClick(e) {
		const color = e.target.dataset.color
		setSelectedColorState(color);
	}

	function updateSandBox() {
		setSandBoxState({ ...sandBoxState, [key]: selectedColorState })
	}

	

	return (
		<>
			<p>text color</p>
			<div className="cell-grid" data-selectedcolor={selectedColorState}>
				{TEXT_COLORS?.map((color, index) => {
					return <ColorCell key={index} color={color} hover={true} colorCellOnClick={colorCellOnClick}/>
				})}
			</div>
		</>
	);
}

export default TextCellGrid;