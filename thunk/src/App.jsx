import './App.css';
import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux'; 
import store from './store';
function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;