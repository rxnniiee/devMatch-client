import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main/Main";

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
