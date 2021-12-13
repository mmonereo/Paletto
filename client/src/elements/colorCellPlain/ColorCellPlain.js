import './ColorCellPlain.css'


function ColorCellPlain({ color }) {
	return (
		
			<div className="color-cell" data-color={color} style={{ backgroundColor: color }}>
			</div>

	)
}

export default ColorCellPlain