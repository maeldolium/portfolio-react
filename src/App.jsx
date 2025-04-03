import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css'



function App() {

  return (
    <>
      <Navbar />
      
      <Hero />
    
      <Skills />
      
      <Projects />
      
      <div id="contact">[Section Contact]</div>
    </>
  );
}

export default App
