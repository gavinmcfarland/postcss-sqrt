export default class CSSvar {
	constructor(name, val = '') {
		if (CSSvar.isVar(val)) {
			this.name = val.replace(/^--/, '')
			this.val = null
		} else {
			this.name = name.toLowerCase().replace(/[\W_]/g, '-')
			this.val = val
		}
	}

	static isVar(str) {
		if (!str) { return false }
		return /^--/.test(str)
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

export class Base extends CSSvar {
	constructor(val) {
		super(`sqrt ${val}`, val)
	}
}

export class Guess extends CSSvar {
	constructor(name) {
		super(`guess${name}`)
	}
}