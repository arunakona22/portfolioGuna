import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import Works from './components/Works';
import WorkStrategy from './components/WorkStrategy';
import './App.css';
import ServicesOffer from './components/ServicesOffer';
import AdditionalDetails from './components/AdditionalDetails';
import Contact from './components/Contact';
import Metrics from './components/Metrics';
import Brands from './components/Brands';
import VideoPlayer from './components/VideoPlayer';
import AboutMe from './components/AboutMe'
const App = () => {
  const aboutText = "With four years of experience in graphic and motion graphic design, I am a creative professional skilled in transforming ideas into visually compelling content. My expertise spans across various design platforms and tools, including Adobe Illustrator (Ai), After Effects (Ae), Adobe Premiere, Photoshop, Canva, Figma, and Blender and also  I have done with video editing, animation, and digital artwork, Logo creation, brand identity design, PowerPoint Presentation.";
  const profilePic = "/Users/siddhanthamnagabalasaikumar/sai/Guna works/Portfolio-main (2)/Portfolio-main/Portfolio-main/designer_portfolio-master/dist/assets/images/profile/profilePic.jpg";
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VideoPlayer />
      <Partners />
      <div id="content">
        <Works />
        <div >

          <WorkStrategy />
          <Brands />
          <ServicesOffer />
          <AdditionalDetails />
        </div>
        <div id="about" className="App">
          <AboutMe aboutText={aboutText} profilePic={profilePic} />
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App;