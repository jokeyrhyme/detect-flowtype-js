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

test('finds flow-enabled files', async () => {
  const options = { dirPath: FLOW_FIXTURE_PATH };

  const filePaths = await annotatedFiles(options);
  expect(Array.isArray(filePaths)).toBe(true);
  expect(filePaths.length).toBe(2);

  expect(await hasAnnotatedFiles(options)).toBe(true);

  expect(await hasFlowConfig(options)).toBe(true);
});

test('finds no flow-enabled files', async () => {
  const options = { dirPath: NO_FLOW_FIXTURE_PATH };

  const filePaths = await annotatedFiles(options);
  expect(Array.isArray(filePaths)).toBe(true);
  expect(filePaths.length).toBe(0);

  expect(await hasAnnotatedFiles(options)).toBe(false);

  expect(await hasFlowConfig(options)).toBe(false);
});
