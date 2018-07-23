/**
 * Example settings:
 * [
   {
     width: 768,
     count : 50
   },
   {
     width: 980,
     count: 100
   },
   {
     width: 1280,
     count: 150
   }
 ]
 */
export default class Ellipse {
	/**
	 * constructor kick off class
	 * @param {Array} [settings=[]] - Array of objects for ellipse settings
	 */
	constructor(settings = []) {
		this.settings = settings
		this.countVal = settings.map(val => val.count)
	}
	/**
	 * ellipseCopy - Check to see if copy needs to be shorten
	 * @param  {String} [copy=''] - copy to shorten
	 * @return {String} -  shorten copy if matces settings
	 */
	ellipseCopy = (copy = '') => {
		for (let i = 0; i < this.countVal.length; i++) {
			const size = this.settings[i].width
			const winSize = window.innerWidth

			if(winSize <= size){
				return `${copy.substring(0, this.countVal[i])}...`
			}
		}

		return copy
	}
}
