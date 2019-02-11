'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/url_string_grabber.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/urlstringgrabber.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_single', '.exe')
  }
}
module.exports = data
