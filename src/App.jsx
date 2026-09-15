import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import{Nav} from './Components/Nav'
import { Home } from './Pages/Home'
import { OurCards } from './Pages/OurCards'
import{CreateYourCards} from './Pages/CreateYourCards'
import { SustainabilityCards } from './Pages/SustainabilityCards'
import { AboutDesignCards } from './Pages/AboutDesignCards'
import { LaudatoSiCards } from './Pages/LaudatoSiCards'
import { VillanovaCards } from './Pages/VillanovaCards'
import { SDGCards } from './Pages/SDGCards'
import {Footer} from './Components/Footer'

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

function App() {
  return (
    <Router basename="/design-cards-website">
       <ScrollToTop />
      <Nav/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/AboutDesignCards" element ={<AboutDesignCards/>}/>
        <Route path ="/OurCards" element={<OurCards/>}/>
        <Route path ="/CreateYourCards" element={<CreateYourCards/>}/>
        <Route path ="/SustainabilityCards" element ={<SustainabilityCards/>}/>
        <Route path ="/LaudatoSiCards" element ={<LaudatoSiCards/>}/>
        <Route path ="/VillanovaCards" element ={<VillanovaCards/>}/>
        <Route path ="/SDGCards" element ={<SDGCards/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
