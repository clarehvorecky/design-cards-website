import { useState } from 'react'
import navIcon from "../assets/nav.png"
import './nav.css'
import { NavLink } from 'react-router-dom'
import { isSafari } from "./IsSafari";
import NotificationPopup from "./NotificationPopup";


export function Nav() {
  const [showSub, setShowSub] = useState(false)
  const [showSafariWarning, setShowSafariWarning] = useState(false);
  const handleDownloadClick = () =>{
    if(isSafari()){
      setShowSafariWarning(true)
    }
    else
      setShowSafariWarning(false)
  };

  return (
    <div>
      <header>
        <h1 style={{display:"flex", gap:"50px", alignItems:"center", justifyContent:"left"}}> 
          <img style={{maxWidth:"8%",maxHeight:"15%"}} src = {navIcon}></img>
          <div style ={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            Sustainable Design Cards
            <p style={{fontSize:"20px", color:"rgb(138, 98, 46)", fontFamily:"cursive", textShadow:"none"}}>Computing Sciences Department at Villanova University</p>
          </div>
        </h1>
      </header>
      <div className="topnav">
        <ul>
          <li><NavLink to ="/"className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
          <li className="dropdown"
          onMouseEnter={()=>setShowSub(true)}
          onMouseLeave={()=>setShowSub(false)}>
          <a href="#contact">Our Cards</a>
          {showSub && (
          <ul className="cardDropdown">
            <li><NavLink to ="/SustainabilityCards">Sustainability Cards</NavLink></li>
            <li><NavLink to ="/LaudatoSiCards">Laudato Si Value Cards</NavLink></li>
            <li><NavLink to ="/VillanovaCards">Villanova Value Cards</NavLink></li>
            <li><NavLink to ="/SDGCards">Sustainable Development Goals Value Cards </NavLink></li>
          </ul>
          )}
          </li>
          <li><NavLink to ="/createyourcards" 
            className={({ isActive }) => (isActive ? "active" : "")}  
            onClick={() => {
              if(isSafari()){
                setShowSafariWarning(true)}
             }}
          >Create your own Cards</NavLink></li>
        </ul>
      </div>
      <NotificationPopup
        isOpen={showSafariWarning}
        onClose={() => setShowSafariWarning(false)}
      />
    </div>
    
  )
}

export default Nav
