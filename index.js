/* @flow */
'use strict';

const path = require('path');

const fs = require('graceful-fs');
const globby = require('globby');
const ignore = require('ignore-by-default').directories();
const pFilter = require('p-filter');
const pify = require('pify');

/* ::
type Options = {
  dirPath: string
}
*/

const FLOW_REGEXP = /(\/\/\s*@flow)|(\/\*\s*@flow\s*\*\/)/;

function createAnnotationFilterer(
  { dirPath } /* : Options */
) /* : (filePath: string) => Promise<boolean> */ {
  return function(filePath /* : string */) /* : Promise<boolean> */ {
    return pify(fs.readFile)(
      path.join(dirPath, filePath),
      'utf8'
    ).then(contents => FLOW_REGEXP.test(contents));
  };
}

function annotatedFiles({ dirPath } /* : Options */) /* : Promise<string[]> */ {
  return globby(['**/*.{mjs,js,jsx}'], {
    cwd: dirPath,
    dot: false,
    ignore,
    nodir: true,
  }).then(jsFiles =>
    pFilter(jsFiles, createAnnotationFilterer({ dirPath }), { concurrency: 1 })
  );
}

function hasAnnotatedFiles(
  { dirPath } /* : Options */
) /* : Promise<boolean> */ {
  return annotatedFiles({ dirPath }).then(result => result.length > 0);
}

function hasFlowConfig({ dirPath } /* : Options */) /* : Promise<boolean> */ {
  return pify(fs.access)(path.join(dirPath, '.flowconfig'))
    .then(() => true)
    .catch(() => false);
}

module.exports = {
  annotatedFiles,
  hasAnnotatedFiles,
  hasFlowConfig,
};
