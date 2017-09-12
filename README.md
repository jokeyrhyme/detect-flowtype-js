# detect-flowtype-js [![AppVeyor Status](https://img.shields.io/appveyor/ci/jokeyrhyme/detect-flowtype-js/master.svg)](https://ci.appveyor.com/project/jokeyrhyme/detect-flowtype-js) [![npm](https://img.shields.io/npm/v/detect-flowtype.svg?maxAge=2592000)](https://www.npmjs.com/package/detect-flowtype) [![Travis CI Status](https://travis-ci.org/jokeyrhyme/detect-flowtype-js.svg?branch=master)](https://travis-ci.org/jokeyrhyme/detect-flowtype-js) [![Greenkeeper badge](https://badges.greenkeeper.io/jokeyrhyme/detect-flowtype-js.svg)](https://greenkeeper.io/)

scan a directory to see if [FlowType](https://flow.org/) is in use


## Usage

```sh
npm install --save detect-flowtype
```

```js
const { annotatedFiles } = require('detect-flowtype')
```


## API


### `annotatedFiles({ dirPath: string }): Promise<string[]>`

locate any files that contain `// @flow` or `/* @flow */`


### `hasAnnotatedFiles({ dirPath: string }): Promise<boolean>`

`true` if any files contain `// @flow` or `/* @flow */`


### `hasFlowConfig({ dirPath: string }): Promise<boolean>`

`true` if there is a ".flowconfig" file


## See Also

-   [FlowType](https://flow.org/)

-   [globby](https://github.com/sindresorhus/globby)

-   [graceful-fs](https://github.com/isaacs/node-graceful-fs)

-   [ignore-by-default](https://github.com/novemberborn/ignore-by-default)

-   [p-filter](https://github.com/sindresorhus/p-filter)

-   [pify](https://github.com/sindresorhus/pify)
