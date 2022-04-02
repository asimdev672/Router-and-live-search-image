import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About  from './About'
import './App.css';
import Navbar from './Navbar';
import User from './User';
import Error from './Error';
import Location from './Location';
import Search from './Search';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/About" element={<About />} />
      <Route path="/User/:fname" element={<User />} />
      <Route exact path="/Location" element={<Location />} />
      <Route exact path="/Search" element={<Search />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  </>
  );
}

export default App;
