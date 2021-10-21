
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import AboutSection from "./components/aboutSection";
import SkillsSection from './components/skillsSection';
import WorkSection from './components/workSection';
import ContactSection from './components/contactSection';
import Footer from './components/footer';
import Header from './components/navbar/header';


function App() {
  return (
    <div className="App">
      
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <Footer />
   
       
    </div>
  );
}

export default App;
