module.exports = {
	env: { browser: true, es6: true },
	root: true,
	parser: 'babel-eslint',
	parserOptions: { sourceType: 'module' },
	env: { browser: true },
	extends: 'standard',
	plugins: ['html'],
	globals: {
		vm: true,
	},
	rules: {
		'arrow-parens': 0,
		'generator-star-spacing': 0,
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-tabs': 0,
		indent: ['error', 'tab'],
		'space-before-function-paren': 0,
		'comma-dangle': 0,
		camelcase: 0,
	},
}
