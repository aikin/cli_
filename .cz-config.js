'use strict'
module.exports = {
	types: [
		{ value: '🌟 feat', name: 'feat:      A new feature' },
		{ value: '🐛 fix', name: 'fix:       A bug fix' },
		{
			value: '🛠 refactor',
			name: 'refactor:  A code change that neither fixes a bug nor adds a feature'
		},
		{ value: '🔬 tech', name: 'tech:      None business related' },
		{ value: '🎰 chore', name: 'chore:     Other stuff' }
	],
	scopes: [{ name: 'module name or page name, update this options in cz-config.js file.' }],
	allowCustomScopes: true,
	allowBreakingChanges: ['feat', 'fix']
}
