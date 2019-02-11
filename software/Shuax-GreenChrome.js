'use strict'

let data = {
  url: 'https://shuax.com/project/greenchrome/',
  version: {
    selector: '.title'
  },
  download: {
    plain: 'https://shuax.com/gc',
    output: '.zip'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath, null, 'x64')
  }
}
module.exports = data
