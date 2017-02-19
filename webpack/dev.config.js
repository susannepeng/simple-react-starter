const path = require('path');
const webpack = require('webpack');
const consts = require('./const.js');

const { APP_DIR, BUILD_DIR, SRC_DIR } = consts;
const DEV_SERVER_PORT = 8080;
const config = {

		entry: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:' + DEV_SERVER_PORT,
			'webpack/hot/only-dev-server'
		],

		output: {
			publicPath: '/',
		},

		devtool: 'inline-source-map',

		devServer: {
			compress: true,
			contentBase: BUILD_DIR,
			port: DEV_SERVER_PORT
		},

		plugins: [
			new webpack.EnvironmentPlugin({ 'NODE_ENV': 'development' }),
			new webpack.NamedModulesPlugin(),
			new (require('flow-babel-webpack-plugin'))()
		]

};

module.exports = config;
