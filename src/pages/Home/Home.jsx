import React from 'react'
import Header from '../../components/header/Header.jsx'
import Nav from '../../components/nav/Nav.jsx'
import About from '../../components/about/About.jsx'
import Experience from '../../components/experience/Experience.jsx'
import Portfolio from '../../components/portfolio/Portfolio.jsx'
import Contact from '../../components/contact/Contact.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Education from '../../components/education/Education.jsx'

export const Home = () => {
  return (
    <>
       <Header/>
       <Nav/>
       <About/>
       <Experience/>
       <Education/>
       <Portfolio/>
       <Contact/>
       <Footer/>
    </>
  )
}
