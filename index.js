/* @flow */
'use strict'

/* ::
type Options = {
  dirPath: string
}
*/

function annotatedFiles (
  { dirPath } /* : Options */
) /* : Promise<string[]> */ {
  return Promise.resolve([])
}

function hasAnnotatedFiles (
  { dirPath } /* : Options */
) /* : Promise<boolean> */ {
  return Promise.resolve(true)
}

module.exports = {
  annotatedFiles,
  hasAnnotatedFiles
}
