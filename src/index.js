import postcss from 'postcss';
import Variable, { Base } from './variables.js';
import approx from './approximation.js';

const walkRule = rule => {
	let isMatch = false
	const fnArgs = {}

	rule.walkDecls(decl => {
		const SQRT_REGEX = /sqrt\(([^)]+.+?)\)/

		// Check if decl has a sqrt function inside it
		isMatch = SQRT_REGEX.exec(decl.value) ? true : false;

		// If it does grab the value of the function
		if (isMatch) {
			let matches = SQRT_REGEX.exec(decl.value);
			const ARGS = matches[1].split(',')
			const _APX = parseInt(ARGS[1])

			fnArgs.base = ARGS[0].trim()
			fnArgs.approx = (_APX < 1 || _APX === NaN) ? 1 : _APX

			// Replace & update the function
			// with css variable that calculates square root
			decl.value = decl.value.replace(SQRT_REGEX, function () {
				return approx(fnArgs.base, fnArgs.approx, { getLast: true })
			})
		}
	})

	// Add the css required for dynamic sqrt calculation
	if (isMatch && fnArgs.approx > 1) {
		const LOCALVAR = Variable.isVar(fnArgs.base) ?
			'' : new Base(fnArgs.base).set();
		const TEMPLATE = approx(fnArgs.base, fnArgs.approx)
		rule.prepend(postcss.parse(LOCALVAR + TEMPLATE))
	}

	rule.walk(i => {
		i.raws.before = "\n\t"
	})
}

export default postcss.plugin('postcss-sqrt', () => {
	return (root) => {
		root.walkRules(rule => walkRule(rule))
	};
});
