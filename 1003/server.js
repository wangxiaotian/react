const webpack = require('webpack');
const express = require('express');
const app = express();
const devConfig = require('./webpack_config/webpack.config.dev.js');
const compiler = webpack(devConfig);
const WebpackDevServer = require('webpack-dev-server');

// compiler.run((err,stats) => {
// 	if(err){
// 		console.log(err.stack || err);
// 		if(err.details){
// 			console.log(err.details)
// 		}
// 		return;
// 	}
// 	const info = stats.toJson();

// 	if(stats.hasErrors()){
// 		console.error(info.errors)
// 	}

// 	if(stats.hasWarnings()){
// 		console.warn(info.warnings)
// 	}
// }) 
/*const server = new WebpackDevServer(compiler,{
	stats: {
		colors: true
	},
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true
})*/

/*server.listen(3000,'127.0.0.1',()=>{
	console.log('starting server on http://localhost:3000')
})*/

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

app.listen('3000',()=>{
	console.log('正常打开3000端口')
})