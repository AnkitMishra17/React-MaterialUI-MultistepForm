import React from 'react';
import Multistep from './components/multistep-form';
import Animated from './assets/SVG/Waihou.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <object type="image/svg+xml" style={{maxWidth:"100%"}} data={Animated}>svg-animation</object>
      <Multistep/>
    </div>
  );
}

export default App;
