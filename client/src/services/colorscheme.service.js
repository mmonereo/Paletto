import axios from 'axios'

class ColorSchemeService {
	constructor(mode, count) {
		this.axiosApp = axios.create({
			baseURL: 'https://www.thecolorapi.com/scheme'
		})
		this.mode = mode
		this.count = count
	}

	getOneScheme = (hex) => this.axiosApp.get(`?hex=${hex}&format=json&mode=${this.mode}&count=${this.count}`)
}

export default ColorSchemeService