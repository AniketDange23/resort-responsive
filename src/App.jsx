import Header from './components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import FixedButtons from './components/FixedButtons';
const App = () => {
  useEffect(() => {
    AOS.init({
      // Global settings
    });
  }, []);
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]); // Scroll to top whenever the pathname changes
  
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