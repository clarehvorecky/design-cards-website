import './cardPage.css'
import { Card } from "../Components/Card"
import EarthIcon from "../assets/earth.png"
import EconomicsIcon from "../assets/economics.png"
import LifestylesIcon from "../assets/lifestyles.png"
import EducationIcon from "../assets/education.png"
import SpiritualityIcon from "../assets/spirituality.png"
import EnpowermentIcon from "../assets/empowerment.png"
import riverIcon from "../assets/riverScene.jpg"
import PoorIcon from "../assets/poor.png"
import LaudatoSiCardsPDF from "../assets/LaudatoSiCards.pdf"
import Heading from '../Components/Heading'
export function LaudatoSiCards(){
    return(
        <>
        <Heading
            img={riverIcon}
            title="Laudato Si Value Cards"
            theme="dark"
        >
            These are our Laudato Si Value Cards, which we created inspired by Pope Francis's encyclical Laudato Si,
            and its call for Ecological Conversion by caring for our environment and all of its inhabitants. 
            You can use these cards to frame sustainability under Pope Francis' vision of Integral Ecology and push for Ecological Conversion.
           <a className="pathway" href ={LaudatoSiCardsPDF} download ="Laudato Si Value Cards.pdf"> Download Cards Here!</a>
        </Heading>
 <div style ={{backgroundColor:"white", height:"10px", width:"1000%"}}></div>
        <div style={{display:"flex",alignItems:"center", justifyContent:"center", flexWrap:"wrap", gap:"35px", marginTop:"40px",marginBottom:"40px",
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px), radial-gradient(rgba(255, 255, 255, 0.32) 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px, 40px 40px",backgroundPosition: "0 0, 15px 15px"}}>
        
            <Card variant='laudatosi'
            title="OVERVIEW"
            footer="Laudato Si Value Cards"
            imgFormat="laudatosi"
            >
            <div><div style={{ height: "2px", backgroundColor: "#255c26", width: "90%", margin: "20px" }} /></div>
            These seven goals provide guidance on urgent and immediate actions we can take in the care of our common home. 
            “All of us can cooperate as instruments of God for the care of creation, each according to his or her own culture, experience,
            involvements and talents” (Laudato Si' 14)
            </Card>

            <Card 
            title="RESPONSE TO THE CRY OF THE EARTH"
            imgSrc={EarthIcon}
            imgAlt="Illustration representing Response to the cry of the Earth"
            footer="Laudato Si Value Cards"
            imgFormat="laudatosi"
            >
             <div><div style={{ height: "2px", backgroundColor: "#255c26", width: "90%", margin: "20px" }} /></div>
            is a call to protect our common home for the well-being of all living creatures as we equitably address the climate crisis, 
            biodiversity loss, and ecological sustainability
            </Card>

            <Card 
            title="ECOLOGICAL ECONOMICS"
            imgSrc={EconomicsIcon}
            imgAlt="Illustration representing Ecological Economics"
            footer="Laudato Si Value Cards"
            imgFormat="laudatosi"
            >
            <div><div style={{ height: "2px", backgroundColor: "#255c26", width: "90%", margin: "20px" }} /></div>
            acknowledges that the economy is a sub-system of human society, which itself is embedded within the biosphere, our common home.
            </Card>

            <Card 
            title="ADOPTION OF SUSTAINABLE LIFESTYLES"
            imgSrc={LifestylesIcon}
            imgAlt="Illustration representing Adoption of Sustainable Lifestyles"
            footer="Laudato Si Value Cards"
            imgFormat="laudatosi"
            >
            <div><div style={{ height: "2px", backgroundColor: "#255c26", width: "90%", margin: "20px" }} /></div>
            is grounded in the idea of sufficiency and not overusing resources and energy.
            </Card>

            <Card 
            title="ECOLOGICAL EDUCATION"
            imgSrc={EducationIcon}
            imgAlt="Illustration representing Ecological Education"
            footer="Laudato Si Value Cards"
            imgFormat="laudatosi"
            >
            <div><div style={{ height: "2px", backgroundColor: "#255c26", width: "90%", margin: "20px" }} /></div>
            is about re-thinking and re-designing curricular and institutional reform in the spirit of integral ecology in order 
            to foster ecological awareness and transformative action.
            </Card>

            <Card 
            title="ECOLOGICAL SPIRITUALITY"
            imgSrc={SpiritualityIcon}
            imgAlt="Illustration representing Ecological Spirituality"
            footer="Laudato Si Value Cards"
            imgFormat="laudatosi"
            >
            <div><div style={{ height: "2px", backgroundColor: "#255c26", width: "90%", margin: "20px" }} /></div>
            helps us to “discover God in all things”,  in the beauty of creation and in the sighs of the sick and the groans of the afflicted,  
            the life of the spirit is not dissociated from worldly realities.
            </Card>

             <Card 
            title="COMMUNITY RESILIENCE AND EMPOWERMENT"
            imgSrc={EnpowermentIcon}
            imgAlt="Illustration representing Community Resilience and Empowerment "
            footer="Laudato Si Value Cards"
            imgFormat="laudatosi"
            >
            <div><div style={{ height: "2px", backgroundColor: "#255c26", width: "90%", margin: "20px" }} /></div>
            imagines a communal journey of community engagement and participatory action at various levels.
            </Card>

             <Card 
            title="RESPONSE TO THE CRY OF THE POOR"
            imgSrc={PoorIcon}
            imgAlt="Illustration representing Response to the Cry of the Poor"
            footer="Laudato Si Value Cards"
            imgFormat="laudatosi"
            >
            <div><div style={{ height: "2px", backgroundColor: "#255c26", width: "90%", margin: "20px" }} /></div>
            is a call to promote eco-justice, aware that we are called to defend human life from conception to death and all forms of life on Earth.
            </Card>

            
            

         </div>
        </>
    )
}