import './App.css';
import Header from './components/Header.js'
import Button from 'react-bootstrap/Button';
import Frontpage from './components/Frontpage'

function App() {
  return (
    <div className="App">
      <Header text = "hi" />
      <Frontpage />
      
    </div>
  );
}

export default App;
