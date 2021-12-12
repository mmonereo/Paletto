import './ColorCellPlain.css'


function CollorCellPlain({ color }) {
	return (
		
			<div className="color-cell" data-color={color} style={{ backgroundColor: color }}>
			</div>

	)
}

export default CollorCellPlain