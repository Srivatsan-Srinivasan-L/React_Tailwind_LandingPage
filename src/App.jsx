import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from "react";
import './index.css'
import Header from './pages/Header';
import Banner from './pages/Banner';
import Footer from './pages/Footer';
import Features from './pages/Features';
import FAQ from './pages/FAQ';
import Teams from './pages/Teams';
import Blog from './pages/Blog';
import { ThemeProvider } from "./context/theme";
import Price from './pages/Price';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    const bodyEl = document.body;
    if (bodyEl) {
      if (darkMode) {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}> 
    <div>
  <Router>
 
        <Header/>
        <Banner/>
        <Features/>
        <Price/>
        <FAQ/>
        <Teams/>
        <Blog/>
        <Footer/>
      </Router>

     
    </div>
    </ThemeProvider>
  )
}

export default App
