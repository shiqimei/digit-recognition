import React from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { dataURIToBlob } from  '../utils';
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
		const blob = dataURIToBlob(fabricCanvas.toDataURL());
		fabricCanvas.initialize(el);
		fabricCanvas.on('mouse:up', e => RecognizeRequest(blob))
	}

	render() {
		return (
			<canvas id="container"></canvas>
		);
	}
};

export default Fabric;