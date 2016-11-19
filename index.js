'use strict'
const path = require('path')
let userHome = require('user-home')

if (process.platform === 'linux' && process.env.USER === 'root') {
  userHome = path.resolve('/usr/local/share')
}

module.exports = function (dir) {
  let configDirectory
  // use %LOCALAPPDATA%/Yarn on Windows
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    configDirectory = path.join(process.env.LOCALAPPDATA, 'Yarn', 'config')
  }
  // otherwise use ~/.yarn
  configDirectory = path.join(userHome, '.config', 'yarn')

  return dir.indexOf(path.join(configDirectory, 'global', 'node_modules')) !== -1
}
