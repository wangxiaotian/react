import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link} from 'react-router';

class App extends React.Component{
	render(){
		return (
			<div id = "main">
				<h1>hello world</h1>
				<div>忽，大风起</div>
			</div>
		)
	}
}
const element = <App />
ReactDOM.render(element,document.getElementById('app'))
if (module.hot) {
  module.hot.accept();
}
