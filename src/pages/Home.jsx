import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import TechSkills from '../components/TechSkills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme Toggle*/ }
        <ThemeToggle/>
      {/* Backgorund Effect*/ }
      <StarBackground/>

      {/* NavBar*/ }
      <NavBar/>

      {/* Main Content*/ }
      <main>

        <HeroSection/>
        <AboutMe/>
        <TechSkills/>
        <Projects/>
        <Contact/>
      </main>

      {/* Footer*/ }
      <Footer/>
    </div>
  )
}

export default Home
