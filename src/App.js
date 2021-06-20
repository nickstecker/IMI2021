import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Frontpage2 from './components/Frontpage2';
import Overview from "./components/Overview";
import Process from "./components/Process";
import Design from "./components/Design";
import Dummy from "./components/Dummy";

function App() {
  return (
    <div className="App" className="bgImage">
      <Header />
      <Frontpage2 />
      <Dummy />
      <Overview />
      <Process />
      <Design />

    </div>
  );
}

export default App;
