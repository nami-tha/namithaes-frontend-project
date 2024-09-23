import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home  from '../components/Home/Home';
import Section from '../components/Section/Section';
import Contact from '../components/Contact/Contact';

function RoutesLayout() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/namithaes-frontend-project' element={<Home/>}/>
          <Route path='/section' element={<Section/>}/>
          <Route path='/contact' element={<Contact/>}/>

          
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default RoutesLayout
