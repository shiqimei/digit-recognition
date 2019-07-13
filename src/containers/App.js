import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './Header';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fabric from './Fabric';

import GithubCorner from 'react-github-corner';

import {
  SaveImage as SaveImageAction
} from '../actions/App';

@connect(state => ({
  number: state.App.number
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

  onReadeSourceClick = () => {
    window.open('https://github.com/lolimay/digit-recognition');
  }

  render() {
    const { number } = this.props;

    return (
      <React.Fragment>
        <GithubCorner href="https://github.com/lolimay/digit-recognition" />
        <Header />
        <Paper className='result-panel'>
          <Typography variant="h5" component="h3">
            你写的是数字 <StyledSpan>{number}</StyledSpan> 吗？
        </Typography>
        </Paper>
        <StyledP>在下方黑板中写一个 0~9 之间的数字，然后机器会尝试猜出该数字并显示在正上方。</StyledP>
        <Card className='card-canvas'>
          <Fabric />
        </Card>
        <div className='controls'>
          <Button variant="contained" color="primary" onClick={this.onSaveButtonClick}>保存图片</Button>
          <Button variant="contained" color="primary" onClick={this.onClearButtonClick}>清除笔迹</Button>
        </div>
        <div className='list-button'>
          <Button variant="contained" color="default" onClick={this.onReadeSourceClick}>查看源码</Button>
        </div>
        <p style={pStyle}>Powered with ❤ by <StyledLink href="https://github.com/lolimay">lolimay</StyledLink>.</p>
      </React.Fragment>
    );
  }
}

const pStyle = {
  marginTop: 50
};

const StyledP = styled.p`
  max-width: 305px;
  margin: 0 auto 100px;
`;

const StyledSpan = styled.span`
  color: #e36209;
  font-weight: 700;
`;

const StyledLink = styled.a`
  color: #26aafe;
  text-decoration: none;
`;

export default App;
