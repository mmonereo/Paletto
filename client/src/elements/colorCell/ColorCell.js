import './ColorCell.css'


function CollorCell({color, colorCellOnClick, isText}){
	return (
		<button  onClick={(e)=> colorCellOnClick(e)}>
			<div className="color-cell" data-color={color} style={isText ? { borderColor: '#fff' } : null} style={{ backgroundColor: color }}>
			</div>
		</button>
	)
}

export default CollorCell