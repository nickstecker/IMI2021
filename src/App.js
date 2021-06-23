import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.js';
import Header2 from './components/Header2.js';
import Video from './components/Video';
import Frontpage from './components/Frontpage';
import Overview from "./components/Overview";
import Process from "./components/Process";
import Design from "./components/Design";
import Dummy from "./components/Dummy";
import Tschernobyl from "./components/Tschernobyl";

function App() {
  return (
      <Router>
        <div className="App" className="bgImage">
      
            <Switch>
      
                <Route path="/main">
                    <div className="bgImage2">
                        <Header2 />
                        <Frontpage />
                        <Overview />
                        <Process />
                        <Design />  
                    </div>
                </Route>
                
                <Route path="/">
                    <div className="bgImage">
                        <Header />
                        <Video />
                        <Dummy />
                        <Tschernobyl />
                    </div>
                </Route>
      
            </Switch>
      
        </div>
      </Router>
  );
}

export default App;

