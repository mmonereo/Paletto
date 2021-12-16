import axios from 'axios'

class PalettesService {
	constructor() {
		this.axiosApp = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/palettes`,
			withCredentials: true
		})
	}

	savePalette = ({ name, sourceColor, colors, count, mode, tags, creator }) => this.axiosApp.post("/save", { name, sourceColor, colors, count, mode, tags, creator })
	getFavorites = (_id) => this.axiosApp.get(`/favorites/${_id}`) 
	getLatest = () => this.axiosApp.get("/browse/latest")
	getByTag = (tag) => this.axiosApp.get(`/browse/${tag}`)
	addFavorite = (_id, palette) => this.axiosApp.post(`/favorites/${_id}`, { palette })
	removeFavorite = (_id, palette) => this.axiosApp.post(`/favorites/remove/${_id}`, { palette })
	
}

export default PalettesService