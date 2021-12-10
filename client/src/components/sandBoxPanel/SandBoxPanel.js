import './SandBoxPanel.css';
import { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import CellGrid from '../cellGrid/CellGrid';

function SandBoxPanel(props) {

	const {sandBoxState} = useContext(SandBoxContext);
	const { colorState } = useContext(ColorContext);

	const grids = [];

	function limitColor(i, max){
		if(i >= max){
			return max;
		}
		return i;
	}

	function countGrids() {

		for (let i = 0; i < sandBoxState.totalColors; i++) {
			grids.push(
				<CellGrid key={`cellgridn${i}`}label={`color ${i + 1}`} 
				selectedColor={colorState.colorScheme[limitColor(i , colorState.count)].hex.value} />
			);
		}

		grids.push(
			<CellGrid key={`cellgridbg`} label={`bg color`} selectedColor={colorState.colorScheme[0].hex.value}/>
		);

		if (sandBoxState.text) {
			grids.push(
				<CellGrid key={`cellgridtext`} label={`text color`}/>
			);
		}
	}

	if (sandBoxState.totalColors > 0) {
		countGrids();
	}
	
	return(
		<div className="sandbox-panel-colors">
			{grids.map(grid => grid)}
		</div>
	);
}

export default SandBoxPanel;