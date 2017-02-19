const merge = require('webpack-merge');
const base = require('./webpack/base.config.js');

module.exports = (env) => merge(require('./webpack/' + env + '.config.js'), base);
