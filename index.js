'use strict'
const fs = require('fs')
const path = require('path')
let userHome = require('user-home')

if (process.platform === 'linux' && isRootUser(getUid())) {
  userHome = path.resolve('/usr/local/share')
}

function getDirectory() {
  let configDirectory
  // use %LOCALAPPDATA%/Yarn on Windows
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    configDirectory = path.join(process.env.LOCALAPPDATA, 'Yarn', 'config')
  } else {
    // otherwise use ~/.config/yarn
    configDirectory = path.join(userHome, '.config', 'yarn')
  }

  return path.join(configDirectory, 'global', 'node_modules')
}

function inDirectory(dir) {
  return dir.indexOf(getDirectory()) !== -1
}

function hasDependency(name) {
  try {
    const dir = getDirectory()
    return Object
      .keys(require(path.join(dir, '../', 'package.json')).dependencies)
      .indexOf(name) !== -1
  } catch (_) {
    return false
  }
}

function hasPackage(name) {
  try {
    const dir = getDirectory()
    return fs.readdirSync(dir).indexOf(name) !== -1
  } catch (_) {
    return false
  }
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

module.exports.getDirectory = getDirectory
module.exports.inDirectory = inDirectory
module.exports.hasDependency = hasDependency
module.exports.hasPackage = hasPackage
