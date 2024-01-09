import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<div>404 Not found!</div>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
