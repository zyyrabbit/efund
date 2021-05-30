const path = require('path');
const BASE = process.cwd();
const SRC = path.join(BASE, 'src');
const COMPONENTS = require('../components.json');
const nodeExternals = require('webpack-node-externals');
let externals = {};

externals = [nodeExternals()];

exports.externals = externals;

exports.commonConfig = {
  CONTEXT: SRC,
  SRC,
  ALIAS: {
    '@': SRC
  }
}

exports.buildConfig = {
  ENTRY: path.join(SRC, 'index.ts'),
  SRC,
  OUT_PATH: path.join(BASE, 'lib'),
  externals
}

exports.componentConfig = {
  ENTRY: COMPONENTS,
  SRC,
  OUT_PATH: path.join(BASE, 'lib'),
  externals
}