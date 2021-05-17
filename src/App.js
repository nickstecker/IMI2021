import './App.css';
import Header from './components/Header.js'
import Button from 'react-bootstrap/Button';
import Frontpage from './components/Frontpage'
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Header text = "hi" />
      <Frontpage />
      <Overview />
      
    </div>
  );
}

export default App;
