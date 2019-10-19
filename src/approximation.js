import { Base, Guess } from './variables.js'

// Using suggestion from mountarreat https://stackoverflow.com/a/49461883/97650
const template = (time, base) => {
	const G = new Guess(time),
		B = new Base(base);
	const formula = `(${G.call()} + (${B.call()} / ${G.call()})) / 2`
	return `${G.call()}: calc(${formula});`
}

/**
 * @param base		the root base number
 * @param approx	the approximation time, default is 5
 * @param mode		has 2 args: getAll, getLast
 *	- `getAll`		(default: false) set true to include the last approx time.
 *	- `getLast`	(default: false) set true to only get the last approx time.
 *					By setting mode.getLast true, it will disable mode.getAll.
 *
 * @returns String	a template string to pass to postcss.parse
 */
export default approx = (base, approx = 5, mode = {}) => {
	const DEFMODE = {
		getAll: false,
		getLast: false
	}
	mode = Object.assign(DEFMODE, mode)

	if (mode.getLast) {
		return template(approx, base)
	}

	var temp = ''
	const LIMIT = mode.getAll ? approx : approx - 1
	for (time = 1; time <= LIMIT; time++) {
		if (time === 1) {
			temp += template(base, base)
		} else {
			temp += template(time, base)
		}
	}
	return temp
}