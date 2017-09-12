/* @flow */
'use strict';

const path = require('path');

const lib = require('../index.js');

const FIXTURES_PATH = path.join(__dirname, '..', '__fixtures__');
const FLOW_FIXTURE_PATH = path.join(FIXTURES_PATH, 'flow-enabled');
const NO_FLOW_FIXTURE_PATH = path.join(FIXTURES_PATH, 'no-flow');

test('exports an object', () => {
  expect(lib).toBeTruthy();
  expect(typeof lib).toBe('object');
});

const { annotatedFiles, hasAnnotatedFiles, hasFlowConfig } = lib;

test('finds flow-enabled files', () => {
  const options = { dirPath: FLOW_FIXTURE_PATH };
  return annotatedFiles(options)
    .then(filePaths => {
      expect(Array.isArray(filePaths)).toBe(true);
      expect(filePaths.length).toBe(2);
    })
    .then(() => hasAnnotatedFiles(options))
    .then(result => expect(result).toBe(true))
    .then(() => hasFlowConfig(options))
    .then(result => expect(result).toBe(true));
});

test('finds no flow-enabled files', () => {
  const options = { dirPath: NO_FLOW_FIXTURE_PATH };
  return annotatedFiles(options)
    .then(filePaths => {
      expect(Array.isArray(filePaths)).toBe(true);
      expect(filePaths.length).toBe(0);
    })
    .then(() => hasAnnotatedFiles(options))
    .then(result => expect(result).toBe(false))
    .then(() => hasFlowConfig(options))
    .then(result => expect(result).toBe(false));
});
