'use strict'
const path = require('path')
let userHome = require('user-home')

if (process.platform === 'linux' && isRootUser(getUid())) {
  userHome = path.resolve('/usr/local/share')
}

module.exports = function (dir) {
  let configDirectory
  // use %LOCALAPPDATA%/Yarn on Windows
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    configDirectory = path.join(process.env.LOCALAPPDATA, 'Yarn', 'config')
  } else {
    // otherwise use ~/.config/yarn
    configDirectory = path.join(userHome, '.config', 'yarn')
  }

  return dir.indexOf(path.join(configDirectory, 'global', 'node_modules')) !== -1
}

function getUid() {
  if (process.platform !== 'win32' && process.getuid) {
    return process.getuid()
  }
  return null
}

function isRootUser(uid) {
  return uid === 0
}
