#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const sao = require('sao')
const cac = require('cac')
const chalk = require('chalk')
const { version } = require('../package.json')

const generator = path.resolve(__dirname, './')

const cli = cac('@agallio/stacks')

const showEnvInfo = async () => {
  console.log(chalk.bold('\nEnvironment Info:'))
  const result = await envinfo.run({
    System: ['OS', 'CPU'],
    Binaries: ['Node', 'Yarn', 'npm'],
    Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
  })
  console.log(result)
  process.exit(1)
}

cli
  .command('[out-dir]', 'Generate in a custom directory or current directory')
  .option('--verbose', 'Show debug logs')
  .action((outDir = '.', cliOptions) => {
    if (cliOptions.info) {
      return showEnvInfo()
    }

    fs.access(outDir, function (error) {
      if (!error) {
        console.log(chalk`{red Directory exists. Try to use another name.}`)
        process.exit(1)
      }
    })

    if (outDir === '.') {
      console.log(
        chalk`{red Please specify the file directory 'npx @agallio/stacks [folder-name]'}`
      )
      process.exit(1)
    }

    console.log()
    console.log(chalk`{cyan @agallio/stacks v${version}}`)
    console.log(chalk`✨  Will generate the boilerplate to {cyan ${outDir}}`)

    const { verbose, answers } = cliOptions
    const logLevel = verbose ? 4 : 2
    // See https://saojs.org/api.html#standalone-cli
    sao({ generator, outDir, logLevel, answers, cliOptions })
      .run()
      .catch((err) => {
        console.trace(err)
        process.exit(1)
      })
  })

cli.help()

cli.version(version)

cli.parse()
