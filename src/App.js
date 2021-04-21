import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main/Main";
import CreateProfile from "./components/Main/CreateProfile/CreateProfile";


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
