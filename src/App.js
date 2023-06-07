import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import AppDragDropDemo from './AppDragDropDemo';

const App = () => {
  return (
    <div>
      <AppDragDropDemo />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;