import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main/Main";
import Card from "./components/UI/Card";

function App() {
  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  );
}

export default App;
