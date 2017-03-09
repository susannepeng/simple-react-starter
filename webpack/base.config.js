const path = require('path');
const webpack = require('webpack');
const consts = require('./const.js');

const { APP_DIR, BUILD_DIR, SRC_DIR } = consts;
const config = {

		entry: [
			path.resolve(SRC_DIR, 'index.js')
		],

		output: {
			path: BUILD_DIR,
			filename: 'bundle.js'
		},

		module: {
			loaders: [
				{
					test: /\.jsx?/,
					include: APP_DIR,
					loader: 'babel-loader'
				},
				{
					test: /\.html$/,
					loader: 'file-loader?name=[path][name].[ext]&context=' + SRC_DIR
				}
			]
		},

		resolve: {
			modules: [APP_DIR, SRC_DIR, 'node_modules'],
			extensions: ['.js', '.jsx']
		},

		plugins: [
		]

};

module.exports = config;