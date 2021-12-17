import './ColorCell.css'


function CollorCell({color, colorCellOnClick, hover}){
	return (
		<button  onClick={(e)=> colorCellOnClick(e)}>
			<div className={hover ? "color-cell cell-hover" : "color-cell"} data-color={color} style={{ backgroundColor: color }}>
			</div>
		</button>
	)
}

export default CollorCell