import Karthik from './Karthik/pages/Karthik';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Karthik />
      </BrowserRouter>
    </div>
  );
}

export default App;
