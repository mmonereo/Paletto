import './SandBoxPanel.css';
import { useContext, useEffect, useState } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import CellGrid from '../cellGrid/CellGrid';
import TextCellGrid from '../textCellGrid/TextCellGrid';

function SandBoxPanel(props) {

	const {sandBoxState, setSandBoxState} = useContext(SandBoxContext);
	const { colorState } = useContext(ColorContext);
	const [gridState, setGridState] = useState([]);
	let newPaletteAuxState = {};
	

	useEffect(() => {
		countGrids()
		return () => {
			setSandBoxState({
				component: "None",
				totalColors: 0
			})			
		}
	}, [sandBoxState.component, colorState.colorScheme]);

	function limitColor(i, max){
		if(i >= max - 1){
			return max - 1;
		}
		return i;
	}

	
	function countGrids() {
		const grids = [];

		for (let i = 1; i < sandBoxState.totalColors + 1; i++) {
			
			let selectedColor = colorState.colorScheme[limitColor(i, colorState.count)];
			grids.push(
				<CellGrid key={`cellgridn${i}`}label={`color ${i}`} 
				selectedColor={selectedColor} />
			);
			newPaletteAuxState = { ...newPaletteAuxState, [`color${i}`]: selectedColor};
		}

		if (sandBoxState.component !== 'None') {
			grids.push(
				<CellGrid key={`cellgridbg`} label={`bg color`} selectedColor={colorState.colorScheme[0]}/>
			);
			newPaletteAuxState = { ...newPaletteAuxState, ['bgcolor']: colorState.colorScheme[0]};
		}

		if (sandBoxState.text) {
			grids.push(
				<TextCellGrid key={`cellgridtext`}/>
			);
		}
		setSandBoxState({ ...sandBoxState, ...newPaletteAuxState});
		setGridState(grids);
	}

	
	return(
		<div className="sandbox-panel-colors" style={sandBoxState.component === "None" ? { visibility: "hidden" } : {visibility: "visible"}}>
			{gridState?.map(grid => grid)}
		</div>
	);
}

export default SandBoxPanel;