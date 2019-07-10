import React from 'react';
import './App.css';

import Header from './Header';
import Card from '@material-ui/core/Card';
import Fabric from './Fabric';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Card className='card-canvas'>
        <Fabric />
      </Card>
    </React.Fragment>
  );
}

export default App;
