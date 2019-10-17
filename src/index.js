import postcss from 'postcss';

const SQRT_REGEX = /sqrt\(([^)]+.+?)\)/
// const VAR_REGEX = /var\(([^)]+.+?)\)/

export default postcss.plugin('postcss-sqrt', () => {
	// console.log({
	// 	opts
	// }); // eslint-disable-line no-console

	return (root) => {
		root.walkRules(rule => {
			let isMatch = false
			let functionValue = ""

			rule.walkDecls(decl => {
				// let matches = SQRT_REGEX.exec(decl.value)
				isMatch = SQRT_REGEX.exec(decl.value) ? true : false;

				if (isMatch) {
					let matches = SQRT_REGEX.exec(decl.value);
					functionValue = matches[1]
				}

				// functionValue = matches[1]

				let newValue = decl.value.replace(SQRT_REGEX, function () {
					return 'var(--guess10)'
				})

				decl.value = newValue

			})

			if (isMatch) {

				const TEMPLATE = `--guess01: calc((${functionValue} + ( ${functionValue} / ${functionValue})) / 2);
--guess02: calc((var(--guess01) + ( ${functionValue} / var(--guess01))) / 2);
--guess03: calc((var(--guess02) + ( ${functionValue} / var(--guess02))) / 2);
--guess04: calc((var(--guess03) + ( ${functionValue} / var(--guess03))) / 2);
--guess05: calc((var(--guess04) + ( ${functionValue} / var(--guess04))) / 2);
--guess06: calc((var(--guess05) + ( ${functionValue} / var(--guess05))) / 2);
--guess07: calc((var(--guess06) + ( ${functionValue} / var(--guess06))) / 2);
--guess08: calc((var(--guess07) + ( ${functionValue} / var(--guess07))) / 2);
--guess09: calc((var(--guess08) + ( ${functionValue} / var(--guess08))) / 2);
--guess10: calc((var(--guess09) + ( ${functionValue} / var(--guess09))) / 2);`

				let props = postcss.parse(TEMPLATE)

				rule.prepend(props)
			}
			rule.walk(i => {
				i.raws.before = "\n\t"
			});
		})

		// console.log({
		// 	root,
		// 	result
		// }); // eslint-disable-line no-console
	};
});
