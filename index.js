/* @flow */
'use strict';

const path = require('path');
const { promisify } = require('util');

const { access, readFile } = require('graceful-fs');
const globby = require('globby');
const ignore = require('ignore-by-default').directories();

/* ::
type Options = {
  dirPath: string
}
*/

const FLOW_REGEXP = /(\/\/\s*@flow)|(\/\*\s*@flow\s*\*\/)/;

async function annotatedFiles(
  { dirPath } /* : Options */
) /* : Promise<string[]> */ {
  const jsFiles = await globby(['**/*.{mjs,js,jsx}'], {
    cwd: dirPath,
    dot: false,
    ignore,
    nodir: true,
  });
  const result = [];
  for (const jsFile of jsFiles) {
    const contents = await promisify(readFile)(
      path.join(dirPath, jsFile),
      'utf8'
    );
    if (FLOW_REGEXP.test(contents)) {
      result.push(jsFile);
    }
  }
  return result;
}

async function hasAnnotatedFiles(
  { dirPath } /* : Options */
) /* : Promise<boolean> */ {
  const result = await annotatedFiles({ dirPath });
  return result.length > 0;
}

async function hasFlowConfig(
  { dirPath } /* : Options */
) /* : Promise<boolean> */ {
  try {
    await promisify(access)(path.join(dirPath, '.flowconfig'));
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  annotatedFiles,
  hasAnnotatedFiles,
  hasFlowConfig,
};
