export default class Ellipse {
	constructor(settings = []) {
		this.settings = settings
		this.countVal = settings.map(val => val.count);
	}
	ellipseCopy = copy => {
		for (let i = 0; i < this.countVal.length; i++) {
			const size = this.settings[i].width
			const winSize = window.innerWidth
			
			if(winSize < size){
				return `${copy.substring(0, this.countVal[i])}...`
			}
		}

		return copy
	}
}
