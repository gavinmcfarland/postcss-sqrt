import postcss from 'postcss';
import CSSvar, { Base } from './cssvar.js';
import formula from './formula.js';
import approx from './approximation.js';

// Add the css required for dynamic sqrt calculation
const dynamicCSS = (base, apxTime) => {
	const LOCALVAR = !CSSvar.isVar(base) ?
		new Base(base).set() :
		'';

	const TEMPLATE = apxTime > 1 ?
		approx(base, apxTime) :
		'';

	return LOCALVAR + TEMPLATE
}

const walkRule = rule => {
	let isExist = false
	const fnArgs = {}

	rule.walkDecls(decl => {
		const SQRT_REGEX = /sqrt\(([^)]+?)\)/

		// Check if decl has a sqrt function inside it
		isExist = SQRT_REGEX.exec(decl.value) ? true : false;

		// If it does grab the value of the function
		if (isExist) {
			const matches = SQRT_REGEX.exec(decl.value);
			const ARGS = matches[1].split(',')
			const _APX_TIME = parseInt(ARGS[1])

			fnArgs.base = ARGS[0].trim()
			fnArgs.approx = (isNaN(_APX_TIME) || _APX_TIME < 1) ? 5 : _APX_TIME

			// Replace & update the function
			// with css variable that calculates square root
			decl.value = decl.value.replace(SQRT_REGEX, function () {
				return formula(
					fnArgs.base,
					fnArgs.approx > 1 ?
						fnArgs.approx - 1 :
						null
				)
			})
		}
	})

	if (isExist) {
		const TEMPLATE = dynamicCSS(fnArgs.base, fnArgs.approx)
		const PROPS = postcss.parse(TEMPLATE)
		rule.prepend(PROPS)
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
