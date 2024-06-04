// React
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// CSS
import './App.css';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Error from './pages/error';

// Components
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} /> {/* If page do not exist*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;
