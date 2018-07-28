import axios from 'axios'
import chalk from 'chalk'
import * as ora from 'ora'

const githubApi: string = 'https://api.github.com'

export const fetchRepos = (username: string) => {
	;(async () => {
		try {
			const spinner = ora('Fetching repos...').start()
			let response = await axios.get(`${githubApi}/users/${username}/repos`)
			spinner.clear()
			spinner.stop()
			console.log(chalk.blueBright('==============='))
			console.log(`Repos size: ${chalk.greenBright(response.data.length)}`)
		} catch (error) {
			console.log(error)
		}
	})()
}
