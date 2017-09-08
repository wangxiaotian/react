var path = require('path');

module.exports = {
	entry: path.resolve(__dirname,'./app/main.js'),
	output: {
		path: path.resolve(__dirname,'./bd'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015','react']
			}
		}]
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true
	}
}