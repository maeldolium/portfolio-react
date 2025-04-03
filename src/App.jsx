import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import './App.css'



function App() {

  return (
    <>
      <Navbar />
      
      <Hero />
    
      <Skills />
      
      <div id="projects">[Section Projets]</div>
      <div id="contact">[Section Contact]</div>
    </>
  );
}

export default App
