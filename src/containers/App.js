import React from 'react';

import styled from 'styled-components';

import './App.css';

import Header from './Header';
import Card from '@material-ui/core/Card';
import Fabric from './Fabric';

function App() {
  return (
    <React.Fragment>
      <Header />
      <StyledP>在白板上写一个 0~9 之间的数字，然后机器会猜测该数字并显示在下方。</StyledP>
      <Card className='card-canvas'>
        <Fabric />
      </Card>
    </React.Fragment>
  );
}

const StyledP = styled.p`
  max-width: 300px;
  margin: 0 auto 20px;
`;

export default App;
