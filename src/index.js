import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { fabric } from 'fabric';

import { Provider } from 'react-redux';
import reduxStore from './lib/createStore';

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

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={reduxStore}>
		<App />
	</Provider>,
	rootElement
);
