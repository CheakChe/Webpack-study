const path = require('path');
const glob = require('glob');

module.exports = {
	devtool: 'source-map',
	entry: {
		'js/main.js': glob.sync('./resource/js/index.js'),
		'css/main.css': glob.sync('./resource/scss/index.scss')
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: "[name]"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: 'sass-loader',
						options: {
							sourceMap: false,
							sassOptions: {
								outputStyle: 'compressed',
							},
						},
					},
				],
			}
		]
	},
	resolve: {
		extensions: ['.js', '.scss']
	}
}