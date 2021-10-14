
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import AboutSection from "./components/aboutSection";
import SkillsSection from './components/skillsSection';




function App() {
  return (
    <div className="App">
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
   
       
    </div>
  );
}

export default App;
