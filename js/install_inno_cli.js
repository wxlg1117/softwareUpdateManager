'use strict'

/**
 * @description regard the install pack as Inno Setup
 * @returns {boolean} if install completed
 * @param {string} from A path to the install pack file.
 * @param {string} to A path to the bin file.
 */

let install = (from, to) => {
  if (!require('./../config').ignoreWarn.install && !require('readline-sync').keyInYNStrict('Notice:\tThis is just same as install manually\nContinue to install?')) return false

  const path = require('path')

  let install = () => {
    let { dir: parentPath } = path.parse(to)
    while (parentPath.toLowerCase().split(/[/\\]+/).includes('bin')) {
      parentPath = path.parse(parentPath).dir
    }

    // http://www.jrsoftware.org/ishelp/topic_setupcmdline.htm
    require('child_process').execSync(`"${from}" /SP- /VERYSILENT /SUPPRESSMSGBOXES /NORESTART /CLOSEAPPLICATIONS /RESTARTAPPLICATIONS /DIR="${parentPath}"`)
    return true
  }

  let killed = require('./kill')(from, to)
  if (!killed) return false

  try {
    let installed = install()
    return installed
  } catch (error) {
    console.error(error)
    return false
  }
}

module.exports = install
