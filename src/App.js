import React from 'react';
import {BrowserRouter as  Router, Routes, Route ,Link} from "react-router-dom"
import Nav from './components/Nav';
import Home from './pages/Home'
import Footer from './components/Footer';
import Fetch from './components/Fetch';
const App = ()=>{
  return(
  <>
  <Router>
  <Nav />

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/general" element={<Fetch cat="general"/>}/>
      <Route exact path="/business" element={<Fetch cat="business"/>}/>
      <Route exact path="/entertainment" element={<Fetch cat="entertainment"/>}/>
      <Route exact path="/health" element={<Fetch cat="health"/>}/>
      <Route exact path="/scince" element={<Fetch cat="science"/>}/>
      <Route exact path="/sports" element={<Fetch cat="sports"/>}/>
      <Route exact path="/technology" element={<Fetch cat="technology"/>}/>




    </Routes>
    <Footer/>
  </Router>
  </>
)
}
export default App;