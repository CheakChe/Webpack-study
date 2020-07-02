const path = require('path');
const glob = require('glob');

module.exports = {
	entry: glob.sync('./resource/**/*.js'),
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'main.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	}
}