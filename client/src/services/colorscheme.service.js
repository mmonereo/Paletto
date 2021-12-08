import axios from 'axios'

class ColorSchemeService {
	constructor() {
		this.axiosApp = axios.create({
			baseURL: 'https://www.thecolorapi.com/scheme'
		})
	}

	getOneScheme = (hex, mode, count) => this.axiosApp.get(`?hex=${hex}&format=json&mode=${mode}&count=${count}`)
}

export default ColorSchemeService