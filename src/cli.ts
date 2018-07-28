import * as commander from 'commander'
import * as inquirer from 'inquirer'
import chalk from 'chalk'

import * as actions from './actions/github'
import { username } from './questions/username'

commander.version('1.0.0').description('A command line seed')

commander
	.command('repo')
	.alias('r')
	.description('Fetch github repos')
	.action(() => {
		console.log(chalk.yellow('=========***Command Line***==========\n'))
		inquirer.prompt(username).then(answer => actions.fetchRepos(answer.username))
	})

if (!process.argv.slice(2).length /* || !/[arudl]/.test(process.argv.slice(2))*/) {
	commander.outputHelp()
	process.exit()
}
commander.parse(process.argv)
