const webpack = require('webpack');
const express = require('express');
const app = express();
const devConfig = require('./webpack_config/webpack.config.dev.js');
const compiler = webpack(devConfig);
const WebpackDevServer = require('webpack-dev-server');

app.use(require('webpack-dev-middleware')(compiler,{
	hot: true,
	historyApiFallback: true,
	progress: true,
	inline: true,
	stats: {
		colors: true
	}
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*',function(req,res){
	res.sendFile(__dirname + '/index.html')
})

app.listen('3002',()=>{
	console.log('正常打开3002端口')
})