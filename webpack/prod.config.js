const webpack = require('webpack');
const consts = require('./const.js');

const { APP_DIR, BUILD_DIR, SRC_DIR } = consts;
const config = {

		plugins: [
			new webpack.EnvironmentPlugin({ 'NODE_ENV': 'production' })
		]

};

module.exports = config;
