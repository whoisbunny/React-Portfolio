import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Textimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'



const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Textimonials/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App
