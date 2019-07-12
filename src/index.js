import 'babel-polyfill';
import 'babel-core/register';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { fabric } from 'fabric';

import { Provider } from 'react-redux';
import reduxStore from './lib/createStore';

// Global Variables
window.fabricCanvas = new fabric.Canvas('drawing', {
	width: 28,
	height: 28,
	isDrawingMode: true,
	backgroundColor: '#000000',
});

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={reduxStore}>
		<App />
	</Provider>,
	rootElement
);
