'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/web_browser_password.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/toolsdownload/webbrowserpassview.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_single', '.exe')
  }
}
module.exports = data
