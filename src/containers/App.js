import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './Header';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Fabric from './Fabric';

import {
  SaveImage as SaveImageAction
} from '../actions/App';

@connect(state => ({

}), dispatch => ({
  saveImage: canvas => dispatch(SaveImageAction(canvas))
}))

class App extends React.Component {
  onClearButtonClick() {
    const fabricCanvas = window.fabricCanvas;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = '#000000';
  }

  onSaveButtonClick = () => {
    const { saveImage } = this.props;
    const canvas = document.querySelector('canvas');
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes('Chrome/7')) {
      saveImage(canvas);
    } else {
      alert('Oops！您的浏览器不支持此功能 :(');
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <StyledP>在下方黑板中写一个 0~9 之间的数字，然后机器会尝试猜出该数字并显示在上方。</StyledP>
        <Card className='card-canvas'>
          <Fabric />
        </Card>
        <div className='controls'>
          <Button variant="contained" color="primary" onClick={this.onSaveButtonClick}>保存图片</Button>
          <Button variant="contained" color="primary" onClick={this.onClearButtonClick}>清除笔迹</Button>
        </div>
      </React.Fragment>
    );
  }
}

const StyledP = styled.p`
  max-width: 300px;
  margin: 0 auto 20px;
`;

export default App;
