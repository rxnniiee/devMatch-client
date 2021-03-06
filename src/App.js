import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;