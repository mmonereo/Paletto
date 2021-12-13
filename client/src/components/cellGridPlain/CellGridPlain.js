import './CellGridPlain.css';
import ColorCellPlain from '../../elements/colorCellPlain/ColorCellPlain';

function CellGridPlain({palette}){
	console.log("pallete en cellGridPlain", palette);
	return(
		<>
			<div className="cell-grid">
				{palette?.colors.map((color, index) => {
					return <ColorCellPlain key={index} color={color}/>
				})}
			</div>
		</>
	);
}

export default CellGridPlain;