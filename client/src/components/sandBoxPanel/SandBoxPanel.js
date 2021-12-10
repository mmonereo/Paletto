import './SandBoxPanel.css';
import { useContext } from 'react';
import { SandBoxContext } from '../../contexts/SandBoxContext';
import CellGrid from '../cellGrid/CellGrid';

function SandBoxPanel(props) {

	const {sandBoxState} = useContext(SandBoxContext);

	const grids = [];

	function countGrids() {

		for (let i = 0; i < sandBoxState.totalColors; i++) {
			grids.push(
				<CellGrid key={`cellgridn${i}`}label={`color ${i + 1}`}/>
			);
		}
		grids.push(
			<CellGrid key={`cellgridbg`} label={`bg color`}/>
		);
		grids.push(
			<CellGrid key={`cellgridtext`} label={`text color`}/>
		);
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