import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contacts/Contact';
import Signup from './components/signin/Signup';
import Home from './components/home/Home';

function App() {
  return (
   
     <Router>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>} exact />
        <Route path='/skills' element={<Skills/>} exact />
        <Route path='/contact' element={<Contact/>} exact />
        <Route path='/signup' element={<Signup/>} exact />
      </Routes>
    </Router> 
     
    
  );
}

export default App;
