import * as path from 'path'
import test from 'ava'
import * as execa from 'execa'

const cwd = path.dirname(__dirname)
const packageJson = require(path.join(cwd, '../package.json'))
const cli = (args, opts) => execa(path.join(cwd, '../bin/cli_'), args, opts)

test('version', async t => {
	const { stdout } = await cli(['-V'], { cwd })
	t.is(stdout, packageJson.version)
})

test('help', async t => {
	const { stdout } = await cli(['-h'], { cwd })
	t.regex(stdout, /Usage: cli_ /)
})
