import * as commander from 'commander';
import chalk from 'chalk';

commander
	.version('1.0.0')
	.description('A command line seed');

commander
	.command('try')
	.alias('t')
	.description('Just have try')
	.action(() => {
		console.log(chalk.yellow('=========*** Try Command Line***=========='));
	});

if (!process.argv.slice(2).length/* || !/[arudl]/.test(process.argv.slice(2))*/) {
	commander.outputHelp();
	process.exit();
}
commander.parse(process.argv);