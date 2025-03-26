
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
