import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'



function App() {

  return (
    <>
      <Navbar />
      
      <Hero />
    
      <Skills />
      
      <Projects />
      
      <Contact />

      <Footer />
    </>
  );
}

export default App
