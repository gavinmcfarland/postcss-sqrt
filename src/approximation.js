import { Guess } from './cssvar';
import formula from './formula.js';


/**
 * @param	{int}	base	the root base number
 * @param	{int}	apporx	the approximation time, default is 5
 * @param	{object}	mode		has 2 args: getAll, getLast
 *	- `getAll`		(default: false) set true to include the last approx time.
 *	- `getLast`		(default: false) set true to only get the last approx time.
 *					By setting mode.getLast true, it will disable mode.getAll.
 *
 * @returns {string}	a template string to pass to postcss.parse
 */
export default function approx(base, apporx = 1) {
	var temp = ''
	const LIMIT = apporx - 1
	for (var time = 1; time <= LIMIT; time++) {
		const VALUE = formula(
			base,
			time === 1 ? null : (time - 1)
		)
		temp += new Guess(time).set(VALUE)
	}
	return temp
}