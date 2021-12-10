import './ColorCell.css'


function CollorCell({color, colorCellOnClick}){
	return (
		<button  onClick={(e)=> colorCellOnClick(e)}>
			<div className="color-cell" data-color={color} style={{ backgroundColor: color } }>
			</div>
		</button>
	)
}

export default CollorCell