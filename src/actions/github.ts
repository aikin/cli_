import axios from 'axios'
import chalk from 'chalk'
import * as ora from 'ora'

const githubApi: string = 'https://api.github.com'

export const getUserProfile = (username: string) => {
	;(async () => {
		try {
			const spinner = ora('Fetching profile...').start()
			let response = await axios.get(`${githubApi}/users/${username}/`)
			spinner.clear()
			spinner.stop()
			console.log(chalk.blue('==============='))
			console.log(chalk.greenBright(response.data))
		} catch (error) {
			console.log(error)
		}
	})()
}
