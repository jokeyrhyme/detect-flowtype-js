# detect-flowtype-js

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

`true` if any files that contain `// @flow` or `/* @flow */`


## See Also

-   [FlowType](https://flow.org/)

-   [globby](https://github.com/sindresorhus/globby)

-   [graceful-fs](https://github.com/isaacs/node-graceful-fs)

-   [ignore-by-default](https://github.com/novemberborn/ignore-by-default)

-   [p-filter](https://github.com/sindresorhus/p-filter)

-   [pify](https://github.com/sindresorhus/pify)
