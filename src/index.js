import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { fabric } from 'fabric';

// Global Variables
window.fabricCanvas = new fabric.Canvas('drawing', {
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

ReactDOM.render(<App />, document.getElementById('root'));
