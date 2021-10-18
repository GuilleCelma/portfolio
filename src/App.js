
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import AboutSection from "./components/aboutSection";
import SkillsSection from './components/skillsSection';
import WorkSection from './components/workSection';




function App() {
  return (
    <div className="App">
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
   
       
    </div>
  );
}

export default App;
