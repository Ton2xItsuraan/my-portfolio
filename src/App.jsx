import { useEffect, useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./Components/NavBar";
import DotGroup from "./Pages/DotGroup";
import Landing from "./Pages/Landing";
import LineGradient from "./Components/LineGradient";
import MySkills from "./Pages/MySkills";
import Projects from "./Pages/Projects";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);

      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll)
    
  }, []);
  

  return (
    <>
        <div className="app bg-deep-blue">
          <NavBar 
            selectedPage={selectedPage} setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
          /> 
            <div className="w-5/6 mx-auto md:h-full">
              {isAboveMediumScreens && (
                < DotGroup 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              )}
              <Landing setSelectedPage={setSelectedPage} />
            </div>
            <LineGradient />
            <div className="w-5/6 mx-auto md:h-full">
              <MySkills />
            </div>
            <LineGradient />
            <div className="w-5/6 mx-auto">
              <Projects />
            </div>
            <LineGradient />
            <div className="w-5/6 mx-auto md:h-full">
              <Testimonials />
            </div>
            <LineGradient />
            <div className="w-5/6 mx-auto md:h-full">
              <Contact/>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default App
