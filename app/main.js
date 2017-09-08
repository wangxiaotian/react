import React from 'react';
import {render} from 'react-dom';

class HelloWorld extends React.Component{
	render(){
		return (
			<div>Helo World</div>
			)
	}
}

render(<HelloWorld />,document.getElementById('content'));