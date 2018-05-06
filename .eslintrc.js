module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			generators: true,
			experimentalObjectRestSpread: true
		},
		sourceType: 'module',
		allowImportExportEverywhere: false
	},
	env: {
		node: true,
		es6: true
	},
	plugins: [
		'prettier'
	],
	extends: ['airbnb', 'prettier'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.json', '.css', '.styl']
			}
		}
	},
	rules: {
		'class-methods-use-this': 1,
		'global-require': 0,
		'import/no-dynamic-require': 0,
		'max-len': 0,
		'no-console': 2,
		'no-plusplus': [2, { 'allowForLoopAfterthoughts': true }],
		'no-tabs': 0,
		'no-unused-vars': [2, { args: 'none' }],
		'no-continue': 0,
		'prettier/prettier': [2, { useTabs: true, tabWidth: 2, singleQuote: true, printWidth: 100, trailingComma: "all" }]
	}
};