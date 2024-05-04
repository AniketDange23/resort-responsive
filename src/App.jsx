import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FixedButtons from './components/FixedButtons';
const App = () => {
  useEffect(() => {
    AOS.init({
      // Global settings
    });
  }, []);
  return (
    <>
      <Header />
      <Outlet/>
      <FixedButtons/>
      <Footer/>
    </>
  )
}

export default App