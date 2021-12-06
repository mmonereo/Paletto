import './CellGrid.css';

import ColorCell from '../../elements/colorCell/ColorCell';

function CellGrid({colors}){
	return(
		<div className="cell-grid">
			{colors?.map((color, index) => {
				return <ColorCell key={index} color={color.hex.value}/>
			})}
		</div>
	);
}

export default CellGrid;