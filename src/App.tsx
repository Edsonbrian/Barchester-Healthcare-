import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services"
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import Contact  from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Faq from "./components/Faq";
import ApplicationForm from "./components/ApplicationForm";
import CareHomes from "./components/CareHomes";

 
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CareHomes />
      <Stats />
      <Careers />
      <ApplicationForm />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
       
  
    
    </div>
  );
  
}

export default App;