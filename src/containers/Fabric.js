import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';

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
			<FabricElement id="container" />
		);
	}
};

const FabricElement = styled.canvas`
	border: 1px solid;
`;

export default Fabric;