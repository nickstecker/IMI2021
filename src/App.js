import './App.css';
import Header from './components/Header.js'
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Header text = "hi"/>
      <h1 className="Heading"> HolidayVR </h1>
      <Button variant="warning">Click me</Button>
      
    </div>
  );
}

export default App;
