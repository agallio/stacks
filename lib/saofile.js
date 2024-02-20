const fs = require('fs')
const clone = require('git-clone')
const { rimraf } = require('rimraf')
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
        {
          name: 'Turborepo Expo + Next.js (TypeScript)',
          value: 'next-expo-turbo-ts',
        },
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

        try {
          await rimraf([
            `${folderPath}/.git`,
            `${folderPath}/.github`,
            `${folderPath}/.vscode`,
            `${folderPath}/lib`,
            `${folderPath}/stacks`,
            `${folderPath}/pnpm-lock.yaml`,
          ])
        } catch (e) {
          console.log(e)
        }
      }
    )
  },
}
