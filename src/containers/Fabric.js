import React from 'react';
import ReactDOM from "react-dom";

class Fabric extends React.Component {
	componentDidMount() {
		const fabricCanvas = window.fabricCanvas;
		const el = ReactDOM.findDOMNode(this);
		fabricCanvas.initialize(el);
	}

	render() {
		return (
			<canvas id="container"></canvas>
		);
	}
};

export default Fabric;