const fs = require('fs')
const clone = require('git-clone')
const rimraf = require('rimraf')
const chalk = require('chalk')

module.exports = {
  prompts: [
    {
      name: 'version',
      message: 'Select the boilerplate version : ',
      type: 'list',
      choices: [
        { name: 'Next.js', value: 'next' },
        { name: 'Next.js (TypeScript)', value: 'next-ts' },
        { name: 'Remix', value: 'remix' },
        { name: 'Remix (TypeScript)', value: 'remix-ts' },
      ],
      default: 'next',
    },
  ],
  async completed() {
    const folderPath = this.outDir

    console.log(chalk`🪄  Copying files to {cyan ${this.outDir}}`)

    await clone(
      'https://github.com/agallio/stacks',
      folderPath,
      [],
      async () => {
        const allFiles = fs
          .readdirSync(`${folderPath}/stacks/${this.answers.version}`)
          .map((fileName) => {
            return fileName
          })

        for (let i = allFiles.length - 1; i >= 0; i--) {
          var file = allFiles[i]
          fs.rename(
            `${folderPath}/stacks/${this.answers.version}/${file}`,
            `${folderPath}/${file}`,
            (err) => {
              if (err) {
                console.log(err)
              }
            }
          )
        }

        console.log(chalk`✨ Done.`)

        rimraf(`${folderPath}/.git`, (e) => e && console.log(e))
        rimraf(`${folderPath}/.github`, (e) => e && console.log(e))
        rimraf(`${folderPath}/lib`, (e) => e && console.log(e))
        rimraf(`${folderPath}/stacks`, (e) => e && console.log(e))
        rimraf(`${folderPath}/pnpm-lock.yaml`, (e) => e && console.log(e))
      }
    )
  },
}
