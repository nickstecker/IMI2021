import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Frontpage from './components/Frontpage'
import Overview from "./components/Overview";
import Process from "./components/Process";
import Design from "./components/Design";
import Dummy from "./components/Dummy";

function App() {
  return (
    <div className="App">
      <Header text = "hi" />
      <Frontpage />
      <Overview />
      <Process />
      <Design />
      <Dummy />
    </div>
  );
}

export default App;
