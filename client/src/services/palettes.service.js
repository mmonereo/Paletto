import axios from 'axios'

class PalettesService {
	constructor() {
		this.axiosApp = axios.create({
			baseURL: 'http://localhost:5000/api/palettes',
			withCredentials: true
		})
	}

	savePalette = ({ name, colors, count, mode, tags, creator }) =>  this.axiosApp.post("/save", { name, colors, count, mode, tags, creator })
	getFavorites = (_id) => {
		console.log("idd en palette service: ", _id)
		return this.axiosApp.get(`/favorites/${_id}`) }
	getLatest = () => this.axiosApp.get("/browse/latest")
	addFavorite = (_id, palette) => this.axiosApp.post(`/favorites/${_id}`, { palette })
	
}

export default PalettesService