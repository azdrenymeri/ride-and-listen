import React, {useEffect} from 'react';
import './App.css';
import Layout from './Layout/Layout';
import StoreProvider from './mobx/Store';
import ReactGA from 'react-ga';


function App() {
  useEffect(() => {
    console.log();
    if (window.location.hostname !== "localhost") {
      ReactGA.initialize("UA-166094245-1");
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  },[])
  return (
    <div className="App">
      <StoreProvider>
          <Layout />
      </StoreProvider>
    </div>
  );
}

export default App;
