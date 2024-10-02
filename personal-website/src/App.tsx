import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Terminal from "./components/Terminal";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/terminal">Terminal</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminal" element={<Terminal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
