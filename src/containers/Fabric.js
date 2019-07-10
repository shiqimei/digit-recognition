import React from 'react';
import ReactDOM from "react-dom";

import { fabric } from 'fabric';

class Fabric extends React.Component {
	componentDidMount() {
		const fabricCanvas = new fabric.Canvas('drawing', {
			width: 300,
			height: 300,
			isDrawingMode: true,
			freeDrawingBrush: {
				width: 100
			},
			freeDrawingBrush: {
				width: 10
			}

		});
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