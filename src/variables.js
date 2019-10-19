// Wait for an interface dream comes true!
const Variable = class {
	constructor(name, val = '', override = false) {
		if (Variable.isVar(val) && override === true) {
			this.name = val.replace(/^--/, '')
			this.val = null
		} else {
			this.name = name.toLowerCase().replace(/[\W_]/g, '-')
			this.val = val
		}
	}

	static isVar(str) {
		if (!str) { return false }
		return str.match(/^--/) != null ? true : false
	}

	set(val = null) {
		const value = (val === null) ? this.val : val
		return `--${this.name}: ${value};`
	}

	get() {
		return `--${this.name}`
	}

	call() {
		return `var(${this.get()})`
	}
}


export class Base extends Variable {
	constructor(val) {
		super('sqrt of', val, true)
	}
}

export class Guess extends Variable {
	constructor(val) {
		super('guess', val)
	}
}

export { Variable as default }