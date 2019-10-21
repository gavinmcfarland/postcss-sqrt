import { Base, Guess } from './cssvar.js'

/**
 * Credit to mountarreat@StackOverflow
 * https://stackoverflow.com/a/49461883/97650
 */

/**
 * @export
 * Square root formula for dynamic CSS
 * 
 * @param	{Guess}	Guess
 * @param	{Base}	Base
 * @returns	{string}
 */
export default function formula(base, guessName = null) {
	const B = new Base(base).call(),
		G = guessName === null ? B : new Guess(guessName).call();

	const formula = `(${G} + (${B} / ${G})) / 2`
	return `calc(${formula})`
}
