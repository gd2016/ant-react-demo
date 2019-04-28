import React from 'react';
import {Button} from 'antd';
import Test from './components/test.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" >测试按钮</Button>
        <Test />
      </header>
    </div>
  );
}

export default App;
