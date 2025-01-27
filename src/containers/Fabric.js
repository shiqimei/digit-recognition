import React from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import {
	RecognizeRequest as RecognizeRequestAction
} from '../actions/App';

@connect(null, dispatch => ({
	RecognizeRequest: blob => dispatch(RecognizeRequestAction(blob))
}))

class Fabric extends React.Component {
	componentDidMount() {
		const { RecognizeRequest } = this.props;
		const fabricCanvas = window.fabricCanvas;
		const el = ReactDOM.findDOMNode(this);
		fabricCanvas.initialize(el);
		fabricCanvas.freeDrawingBrush.color = '#ffffff';
		fabricCanvas.freeDrawingBrush.width = 2;
		fabricCanvas.on('mouse:up', e => {
			const imageBase64 = fabricCanvas.toDataURL().replace(/^data:image\/png;base64,/, '');
			RecognizeRequest(imageBase64)
		})
	}

	render() {
		return (
			<canvas id="container"></canvas>
		);
	}
};

export default Fabric;