import {Card } from "../Components/Card"
import oneIcon from "../assets/one.png"
import twoIcon from "../assets/two.png"
import threeIcon from "../assets/three.png"
import fourIcon from "../assets/four.png"
import fiveIcon from "../assets/five.png"
import sixIcon from "../assets/six.png"
import sevenIcon from "../assets/seven.png"
import eightIcon from "../assets/eight.png"
import nineIcon from "../assets/nine.png"
import tenIcon from "../assets/ten.png"
import elevenIcon from "../assets/eleven.png"
import twelveIcon from "../assets/twelve.png"
import thirteenIcon from "../assets/thirteen.png"
import fourteenIcon from "../assets/fourteen.png"
import fifteenIcon from "../assets/fifteen.png"
import sixteenIcon from "../assets/sixteen.png"
import seventeenIcon from "../assets/seventeen.png"
import trailIcon from "../assets/trail.jpg"
import Heading from "../Components/Heading"
import SDGCardsPDF from "../assets/SDGCards.pdf"
export function SDGCards(){
    return(
        <>
        <Heading
        title="Sustainable Development Goals Cards"
        img={trailIcon}
        theme="light">
            Our Sustainable Development Goals (SDGS) Value cards are adapted from The United Nations's
            global plan to end inequalities, create a cleaner earth and an overall eco-friendly society.These cards can help
            your community adapt The United Nation's sustainability goals. <a className="pathway"href ={SDGCardsPDF} download ="SDG Value Cards.pdf"> Download Cards Here!</a>   


        </Heading>
        
         <div style ={{backgroundColor:"white", height:"10px", width:"1000%"}}></div>
        <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center",gap:"30px", marginTop:"40px",marginBottom:"40px",
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.18) 1.5px, transparent 1.5px), radial-gradient(rgba(255, 255, 255, 0.17) 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px, 40px 40px",backgroundPosition: "0 0, 15px 15px"}}>

         <Card
            variant="sdg card-sdg-overview"
            title="OVERVIEW"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            >
            <div><div style={{ height: "2px", backgroundColor: "#651267", width: "90%", margin: "20px" }} /></div>
            These seventeen goals created by the United Nations provide us a shared plan on how to end poverty, protect the earth and bring peace and prosperity to all living things.
         </Card>
        <Card
            variant="sdg card-sdg-one"
            title="NO POVERTY"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={oneIcon}
            imgAlt="Illustration representing No Poverty">
            <div><div style={{ height: "2px", backgroundColor: "#E5243B", width: "90%", margin: "20px" }} /></div>
            End poverty in all its forms everywhere.
        </Card>
            
        <Card
            variant="sdg card-sdg-two"
            title="ZERO HUNGER"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={twoIcon}
            imgAlt="Illustration representing Zero Hunger">
             <div><div style={{ height: "2px", backgroundColor: "#DDA63A", width: "90%", margin: "20px" }} /></div>
            End hunger, achieve food security and improved nutrition and promote sustainable agriculture.
        </Card> 
        
        <Card
            variant="sdg card-sdg-three"
            title="GOOD HEALTH & WELL BEING"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={threeIcon}
            imgAlt="Illustration representing Good Health and Well Being">
             <div><div style={{ height: "2px", backgroundColor: "#4C9F38", width: "90%", margin: "20px" }} /></div>
            Ensure healthy lives and promote well-being for all at all ages.
        </Card> 
        
        <Card
            variant="sdg card-sdg-four"
            title="QUALITY EDUCATION"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={fourIcon}
            imgAlt="Illustration representing Quality Education">
             <div><div style={{ height: "2px", backgroundColor: "#C5192D", width: "90%", margin: "20px" }} /></div>
             Ensure inclusive and equitably quality education and promote lifetime of learning opportunities for all.
        </Card> 
        
        <Card
            variant="sdg card-sdg-five"
            title="GENDER EQUALITY"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={fiveIcon}
            imgAlt="Illustration representing Gender Equality">
             <div><div style={{ height: "2px", backgroundColor: "#FF3A21", width: "90%", margin: "20px" }} /></div>
            Achieve gender equality and empower all women and girls.
        </Card> 
        
        <Card
            variant="sdg card-sdg-six"
            title="CLEAN WATER & SANITATION"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={sixIcon}
            imgAlt="Illustration representing Clean Water and Sanitation">
             <div><div style={{ height: "2px", backgroundColor: "#26BDE2", width: "90%", margin: "20px" }} /></div>
             Ensure the availability and sustainable management of water and sanitation for all.
        </Card>

        <Card
            variant="sdg card-sdg-seven"
            title="AFFORDABLE & CLEAN ENERGY"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={sevenIcon}
            imgAlt="Illustration representing Affordable and Clean Energy">
             <div><div style={{ height: "2px", backgroundColor: "#FCC30B", width: "90%", margin: "20px" }} /></div>
             Ensure access to affordable, reliable, sustainable, and modern energy for all.
        </Card>
          
        <Card
            variant="sdg card-sdg-eight"
            title="DECENT WORK & ECONOMIC GROWTH"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={eightIcon}
            imgAlt="Illustration representing Decent Work and Economic Growth">
             <div><div style={{ height: "2px", backgroundColor: "#A21942", width: "90%", margin: "20px" }} /></div>
             Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.
        </Card> 
        
        <Card
            variant="sdg card-sdg-nine"
            title="INDUSTRY, INNOVATION & INFRASTRUCTURE"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={nineIcon}
            imgAlt="Illustration representing Industry, Innovation and Infrastructure">
             <div><div style={{ height: "2px", backgroundColor: "#FD6925", width: "90%", margin: "20px" }} /></div>
             Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.
        </Card> 
        
        <Card
            variant="sdg card-sdg-ten"
            title="REDUCED INEQUALITIES"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={tenIcon}
            imgAlt="Illustration representing Reduced Inequalities">
             <div><div style={{ height: "2px", backgroundColor: "#DD1367", width: "90%", margin: "20px" }} /></div>
             Reduce inequality within and among countries.
        </Card> 
        
        <Card
            variant="sdg card-sdg-eleven"
            title="SUSTAINABLE CITIES & COMMUNITIES"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={elevenIcon}
            imgAlt="Illustration representing Sustainable Cities and Communities">
             <div><div style={{ height: "2px", backgroundColor: "#FD9D24", width: "90%", margin: "20px" }} /></div>
             Make cities and human settlements inclusive, safe, and sustainable.

        </Card> 
        
        <Card
            variant="sdg card-sdg-twelve"
            title="RESPONSIBLE CONSUMPTION & PRODUCTION"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={twelveIcon}
            imgAlt="Illustration representing Responsible Consumption and Production">
             <div><div style={{ height: "2px", backgroundColor: "#BF8B2E", width: "90%", margin: "20px" }} /></div>
             Ensure sustainable consumption and production patterns.
        </Card>

        <Card
            variant="sdg card-sdg-thirteen"
            title="CLIMATE ACTION"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={thirteenIcon}
            imgAlt="Illustration representing Climate Action">
             <div><div style={{ height: "2px", backgroundColor: "#3F7E44", width: "90%", margin: "20px" }} /></div>
             Take urgent action to combat climate change and its impacts.
        </Card> 
        
        <Card
            variant="sdg card-sdg-fourteen"
            title="LIFE BELOW WATER"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={fourteenIcon}
            imgAlt="Illustration representing Life Below Water">
             <div><div style={{ height: "2px", backgroundColor: "#0A97D9", width: "90%", margin: "20px" }} /></div>
            Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.
        </Card> 
        
        <Card
            variant="sdg card-sdg-fifteen"
            title="LIFE ON LAND"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
            imgSrc={fifteenIcon}
            imgAlt="Illustration representing Life on Land">
             <div><div style={{ height: "2px", backgroundColor: "#56C02B", width: "90%", margin: "20px" }} /></div>
            Protect, restore, and promote the sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification and halt and reverse land degradation and halt biodiversity loss.
        </Card> 
        
        <Card
            variant="sdg card-sdg-sixteen"
            title="PEACE JUSTICE & STRONG INSTITUTIONS"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
             imgSrc={sixteenIcon}
             imgAlt="Illustration representing Peace Justice and Strong Institutions">
             <div><div style={{ height: "2px", backgroundColor: "#00689D", width: "90%", margin: "20px" }} /></div>
            Promote peaceful and inclusive societies, provide access to justice for all, and build effective, accountable and inclusive institutions at all levels.
        </Card> 
        
        <Card
            variant="sdg card-sdg-seventeen"
            title="PARTNERSHIPS FOR THE GOAL"
            titleFormat="sdg"
            footer="SDGS Value Cards"
            imgFormat="sdg"
             imgSrc={seventeenIcon}
             imgAlt="Illustration representing Partnerships for the Goal">
             <div><div style={{ height: "2px", backgroundColor: "#19486A", width: "90%", margin: "20px" }} /></div>
            Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.
        </Card>
        </div>
        </>

        
   
    )
}
