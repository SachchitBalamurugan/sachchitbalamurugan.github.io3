import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from "./Blog";
import Contact from './Contact';
import Clients from "./Clients";
import Involve from "./involve";
import Mentor from "./mentor";
const App = () => {
  return (
    <Router basename="/testvite"> {/* Set the base path to your app name */}
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/involve" element={<Involve />} />
          <Route path="/mentor" element={<Mentor />} /> 
          {/* Optionally add more routes here
          <Route path="*" element={<div>Page Not Found</div>} /> {/* 404 route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
