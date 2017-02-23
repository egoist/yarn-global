# yarn-global

[![NPM version](https://img.shields.io/npm/v/yarn-global.svg?style=flat-square)](https://npmjs.com/package/yarn-global) [![NPM downloads](https://img.shields.io/npm/dm/yarn-global.svg?style=flat-square)](https://npmjs.com/package/yarn-global) [![Build Status](https://img.shields.io/circleci/project/egoist/yarn-global/master.svg?style=flat-square)](https://circleci.com/gh/egoist/yarn-global)

## Install

```bash
yarn add yarn-global
```

## Usage

```js
const yarnGlobal = require('yarn-global')

yarnGlobal.getDirectory()
//=> /Users/name/.config/yarn/global/node_modules

yarnGlobal.inDirectory(process.cwd())
// Check if a path is a child path of the value of `yarnGlobal.getDirectory()`

yarnGlobal.getDependencies()
// An array of denpendencies installed by `yarn global add`

yarnGlobal.hasDependency('create-react-app')
// Check if you have installed it via `yarn global add`
//=> true

yarnGlobal.hasPackage('minimist')
// Check if `/Users/name/.config/yarn/global/node_modules/minimist` exists
// you may not have installed it by `yarn global add`
//=> true
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
