import axios from 'axios'

class PalettesService {
	constructor() {
		this.axiosApp = axios.create({
			baseURL: 'http://localhost:5000/api/palettes',
			withCredentials: true
		})
	}

	savePalette = ({ name, colors, count, mode, tags, creator }) =>  this.axiosApp.post("/save", { name, colors, count, mode, tags, creator })
	
}

export default PalettesService