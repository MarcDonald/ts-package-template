module.exports = {
	extends: ['plugin:@typescript-eslint/recommended', 'turbo', 'prettier'],
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	rules: {
		'prettier/prettier': ['error', {}],
		'no-used-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
	},
	overrides: [
		{
			files: ['*.test.ts'],
			rules: {
				'no-console': 'off',
			},
		},
	],
	ignorePatterns: ['*.d.ts', '*.ts.map', '*.tsbuildinfo'],
	parser: '@typescript-eslint/parser',
};
