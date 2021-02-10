import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import StoreProvider from './mobx/Store';

function App() {
  return (
    <div className="App">
      <StoreProvider>
          <Layout />
      </StoreProvider>
    </div>
  );
}

export default App;
