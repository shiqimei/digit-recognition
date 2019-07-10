import React from 'react';
import './App.css';

import Card from '@material-ui/core/Card';
import Fabric from './Fabric';

function App() {
  return (
    <Card className='card-canvas'>
      <Fabric />
    </Card>
  );
}

export default App;
