const path = require('path');

const ROOT_DIR 			= path.resolve(__dirname, '..'		);
const SRC_DIR 			= path.resolve(ROOT_DIR	, 'src'  	);
const APP_DIR 			= path.resolve(SRC_DIR	, 'app'  	);
const BUILD_DIR 		= path.resolve(ROOT_DIR	, 'build'	);

module.exports.APP_DIR = APP_DIR;
module.exports.BUILD_DIR = BUILD_DIR;
module.exports.SRC_DIR = SRC_DIR;
