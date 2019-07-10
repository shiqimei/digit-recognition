import React from 'react';

import styled from 'styled-components';

import './App.css';

import Header from './Header';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Fabric from './Fabric';

class App extends React.Component {
  onClearButtonClick() {
    const fabricCanvas = window.fabricCanvas;
    fabricCanvas.clear();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <StyledP>在白板上写一个 0~9 之间的数字，然后机器会猜测该数字并显示在下方。</StyledP>
        <Card className='card-canvas'>
          <Fabric />
        </Card>
        <div className='controls'>
          <Button variant="contained" color="primary" onClick={this.onClearButtonClick}>清空</Button>
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
