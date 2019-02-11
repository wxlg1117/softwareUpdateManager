'use strict'

let data = {
  commercial: 3,
  url: 'http://www.x-ways.net/winhex/',
  version: {
    selector: 'strong'
  },
  download: {
    plain: 'http://www.x-ways.net/winhex.zip'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
