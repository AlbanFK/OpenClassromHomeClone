import React from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './HeroSection/Hero'
import Savoir from './Savoirsection/Savoir'
import Candidature from './CandidatureSection/Candidature'
import Storie from './Stories/Storie'
import Footer from './Footer/Footer'

function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Savoir/>
      <Candidature/>
      <Storie/>
      <Footer/>
    </>
  )
}

export default Home
