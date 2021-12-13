import './CellGridPlain.scss';
import ColorCellPlain from '../../elements/colorCellPlain/ColorCellPlain';

function CellGridPlain({palette}){
	return(
		<>
		
			<div className="cell-grid" data-selectedcolor={selectedColorState}>
				{palette?.map((color, index) => {
					return <ColorCellPlain key={index} color={color.hex.value}/>
				})}
			</div>
		</>
	);
}

export default CellGridPlain;