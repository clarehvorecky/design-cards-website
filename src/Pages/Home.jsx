import OurResearch from "../Components/OurRearch"
import Heading from "../Components/Heading"
import villanovaImage from "../assets/villa.svg"
import './HomePage.css'
export function Home(){
    return(
        <>
        
        <Heading
        img={villanovaImage}
        title="Who We Are"
        variant="homepage"
        theme="dark">
            We are a team of researchers in the Computing Sciences Department at Villanova University focusing on Sustainability, 
            Innovation, and Technological Design. We strive to create technologies that promote sustainable practices within our local
            community and community at large. 
        </Heading>
        
        <div style={{ backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px), radial-gradient(rgba(255, 255, 255, 0.32) 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px, 40px 40px",backgroundPosition: "0 0, 15px 15px"}}>
                <OurResearch></OurResearch>
        </div>
        <div className="line"></div>
        </>
       
    )
}