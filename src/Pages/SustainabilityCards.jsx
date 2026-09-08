import {Card} from "../Components/Card"
import usaIcon from "../assets/usa.svg"
import worldIcon from "../assets/world.svg"
import phillyIcon from "../assets/philly.svg"
import purchasesIcon from "../assets/purchases.png"
import shelterIcon from "../assets/shelter.png"
import transportationIcon from "../assets/transportation.png"
import foodIcon from "../assets/food.png"
import houseIcon from "../assets/house.jpg"
import pathwayCardsPDF from "../assets/PathwayCards.pdf"
import { SustainabilityCardsLayout } from "../Components/CardLayout"
import Heading from "../Components/Heading"

export function SustainabilityCards(){
    return(
        <>
        <Heading
            title="Sustainability Cards"
            img={houseIcon}
            theme="light"
        >
            These are our Sustainable Pathway Cards. We decided to focus on four key pathways you can follow to live a sustainable lifestyle:
            <a className="pathway" href="#trans-pathway">Transportation</a>, <a className="pathway" href="#shelter-pathway">Shelter/Energy</a>, <a className="pathway" href="#food-pathway">Food/Water</a> & <a className="pathway"href="#purchases-pathway">Consumer Purchases</a>. The following cards below contains statistics showing the effects of environmental pollution in these pathways on Local, National and Global levels.
             <a className="pathway"href ={pathwayCardsPDF} download ="Sustainability Cards.pdf"> Download Cards Here!</a>     
        </Heading>
    
            <div style ={{backgroundColor:"white", height:"10px", width:"100%"}}></div>
            <div className="white">

                <SustainabilityCardsLayout id="trans-pathway" background="background-trans" pathway={"transportation"} pathwayTitle="Transportation Pathway">

                    
                     <Card 
                        logoSrc={transportationIcon}
                        variant = "transpathway"
                        title="TRANSPORTATION"
                        imgFormat ="pathway"
                        footer="Transportation Pathway Cards"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#B8612B", width: "90%", margin: "20px" }} /></div>
                        encourages the use of environmentally friendly modes of transportation like public transportation or carpooling. 
                        In doing this we hope to minimize the carbon emissions that are produced by on road vehicles 
                        while also providing more cost effective environmentally friendly modes of transportation.
                    </Card>

                    <Card 
                        logoSrc={transportationIcon}
                        variant = "transpathway"
                        title="LOCAL ISSUES"
                        imgFormat ="pathway"
                        imgSrc={phillyIcon}
                        imgSize="philly"
                        imgAlt="Illustration representing Philadelphia"
                        footer="Transportation Pathway Cards"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#B8612B", width: "90%", margin: "20px" }} /></div>
                    In Philadelphia a 45 minute drive to work offers a person access to <span className = "bold">1,500,000 </span>jobs, while a commute via public transportation only reaches <span className = "bold">200,000</span> estimated jobs.
                    </Card>
            
                    <Card 
                        logoSrc={transportationIcon}
                        variant = "transpathway"
                        title="NATIONAL ISSUES"
                        imgFormat ="pathway"
                        footer="Transportation Pathway Cards"
                        imgSrc={usaIcon}
                        imgAlt="Illustration representing the United States"
                        imgSize="usa"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#B8612B", width: "90%", margin: "20px" }} /></div>
                        In the United States, 91.7% of households own at least one car, with this trend upwardly rising,  as of 2023 the U.S had over <span className ="bold">231 million registered cars</span>.
                    </Card>

                    <Card 
                        logoSrc={transportationIcon}
                        variant = "transpathway"
                        title="GLOBAL ISSUES"
                        imgFormat ="pathway"
                        footer="Transportation Pathway Cards"
                        imgSrc={worldIcon}
                        imgAlt="Illustration representing the world"
                        imgSize="world"
                        >
                    <div><div style={{ height: "2px", backgroundColor: "#B8612B", width: "90%", margin: "20px" }} /></div>
                        Transportation accounts for <span className ="bold">20% </span> of the world's energy and 2/3rds of the oil used worldwide which produces <span className ="bold">16%</span> of the world's Greenhouse gas emissions.
                    </Card>
                </SustainabilityCardsLayout>
              
           
               <SustainabilityCardsLayout id ="shelter-pathway" background="background-shelter"pathway={"shelterEnergy"}pathwayTitle="Shelter & Energy Pathway">
                    <Card 
                        logoSrc={shelterIcon}
                        variant = "shelterspathway"
                        title="SHELTER/ENERGY"
                        imgFormat ="pathway"
                        footer="Shelter/Energy Pathway Cards"       
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#0097B2", width: "90%", margin: "20px" }} /></div>
                        focuses on creating sustainable housing using:less and renewable power, efficient designs and eco-friendly materials to reduce emissions and improve living conditions.
                    </Card>

                    <Card 
                        logoSrc={shelterIcon}
                        variant = "shelterspathway"
                        title="LOCAL ISSUES"
                        imgFormat ="pathway"
                        footer="Shelter/Energy Pathway Cards"
                        imgSrc={phillyIcon}
                        imgAlt="Illustration representing Philadelphia"
                        imgSize="philly"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#0097B2", width: "90%", margin: "20px" }} /></div>
                         Many low-income households in Philadelphia face high energy burdens, with energy costs consuming <span className="bold">10.5%</span> of their income, versus <span className="bold">2.7%</span> for all other homes. 
                    </Card>

                    <Card 
                        logoSrc={shelterIcon}
                        variant = "shelterspathway"
                        title="NATIONAL ISSUES"
                        imgFormat ="pathway"
                        footer="Shelter/Energy Pathway Cards"
                        imgSrc={usaIcon}
                        imgAlt="Illustration representing the United States"
                        imgSize="usa"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#0097B2", width: "90%", margin: "20px" }} /></div>
                        Buildings consume <span className ="bold">75% of the electricity</span> & <span className ="bold">40% of the total energy</span> used  in the United States From: heating, ventilation, AC; lighting; appliances, plug loads, etc.
                    </Card>

                    <Card 
                        logoSrc={shelterIcon}
                        variant = "shelterspathway"
                        title="GLOBAL ISSUES"
                        imgFormat ="pathway"
                        footer="Shelter/Energy Pathway Cards"
                        imgSrc={worldIcon}
                        imgAlt="Illustration representing the world"
                        imgSize="world"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#0097B2", width: "90%", margin: "20px" }} /></div>     
                        Rapid urbanization and construction rely on <span className ="bold">carbon-heavy cement and steel</span>, causing around <span className = "bold">37% </span>of global CO₂ emissions when combined with energy use.
                    </Card>
                </SustainabilityCardsLayout>
               

                <SustainabilityCardsLayout id ="food-pathway" background="background-food"pathway={"foodWater"} pathwayTitle="Food & Water Pathway">
                    <Card 
                        logoSrc={foodIcon}
                        variant = "foodpathway"
                        title="FOOD/WATER"
                        imgFormat ="pathway"
                        footer="Food/Water Pathway Cards"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#2E6417", width: "90%", margin: "20px" }} /></div>
                        encourages the environmentally friendly production and consumption of food and water by consuming less water in and outside of our homes while also wasting less food. The goals for this pathway are improving water use efficiency, ending food and water scarcity and reducing pollution.
                    </Card>

                    <Card 
                        logoSrc={foodIcon}
                        variant = "foodpathway"
                        title="LOCAL ISSUES"
                        imgFormat ="pathway"
                        footer="Food/Water Pathway Cards"
                        imgSrc={phillyIcon}
                        imgAlt="Illustration representing the Philadelphia"
                        imgSize="philly"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#2E6417", width: "90%", margin: "20px" }} /></div>
                       Philadelphia residents generate over <span className ="bold">206 million pounds</span> of food waste yearly, yet over 20% of its residents and 30% of children <span className = "bold">lack access </span>to nutritious foods.  
                    </Card>
                
                    <Card 
                        logoSrc={foodIcon}
                        variant = "foodpathway"
                        title="NATIONAL ISSUES"
                        imgFormat ="pathway"
                        footer="Food/Water Pathway Cards"
                        imgSrc={usaIcon}
                        imgAlt="Illustration representing the United States"
                        imgSize="usa"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#2E6417", width: "90%", margin: "20px" }} /></div>
                        Organic food options can be up to <span className ="bold">80% more expensive </span>than its non-sustainable counterpart, making greener/healthier options <span className ="bold">unaffordable </span>for many families. 
                    </Card>
                
                    <Card 
                        logoSrc={foodIcon}
                        variant = "foodpathway"
                        title="GLOBAL ISSUES"
                        imgFormat ="pathway"
                        footer="Food/Water Pathway Cards"
                        imgSrc={worldIcon}
                        imgAlt="Illustration representing the world"
                        imgSize="world"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#2E6417", width: "90%", margin: "20px" }} /></div>
                        Globally about <span className ="bold">1/5th </span>of all food created for human composition is wasted with humans generating <span className ="bold">1.05 billion tons </span>of food waste annually.
                    </Card>
                    </SustainabilityCardsLayout>

                    <SustainabilityCardsLayout id = "purchases-pathway" background="background-purchases"pathway={"consumerPurchases"} pathwayTitle="Consumer Purchases Pathway">
                    <Card 
                        logoSrc={purchasesIcon}
                        variant = "purchasepathway"
                        title="CONSUMER PURCHASES"
                        imgFormat ="pathway"
                        footer="Consumer Purchases Pathway Cards"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#C5192D", width: "90%", margin: "20px" }} /></div>
                        tracks the lifecycle of products people buy: how they're made, transported, used, and thrown away, and how each stage contributes to carbon emissions, waste, and resource depletion.
                    </Card>
                
                    <Card 
                        logoSrc={purchasesIcon}
                        variant = "purchasepathway"
                        title="LOCAL ISSUES"
                        imgFormat ="pathway"
                        footer="Consumer Purchases Pathway Cards"
                        imgSrc={phillyIcon}
                        imgAlt="Illustration representing Philadelphia"
                        imgSize="philly"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#C5192D", width: "90%", margin: "20px" }} /></div>
                        In 2023, Philadelphia residents used about <span className ="bold">1 billion single-use plastic bags</span> annually, for retail and grocery purchases. 
                    </Card>
                
                    <Card 
                        logoSrc={purchasesIcon}
                        variant = "purchasepathway"
                        title="NATIONAL ISSUES"
                        imgFormat ="pathway"
                        footer="Consumer Purchases Pathway Cards"
                        imgSrc={usaIcon}
                        imgAlt="Illustration representing the United States"
                        imgSize="usa"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#C5192D", width: "90%", margin: "20px" }} /></div>
                        Americans generate about <span className="bold">50 pounds of e-waste per person</span>, driven by frequent upgrades of electronics like phones, laptops, and appliances
                    </Card>

                    <Card 
                        logoSrc={purchasesIcon}
                        variant = "purchasepathway"
                        title="GLOBAL ISSUES"
                        imgFormat ="pathway"
                        footer="Consumer Purchases Pathway Cards"
                        imgSrc={worldIcon}
                        imgAlt="Illustration representing the world"
                        imgSize="world"
                    >
                    <div><div style={{ height: "2px", backgroundColor: "#C5192D", width: "90%", margin: "20px" }} /></div>
                        Fast Fashion Pollution is Responsible for <span className="bold">20% global wastewater and 10% CO₂ </span>which is more impact than air + sea shipping combined
                    </Card>
                    </SustainabilityCardsLayout>
            </div>
            <div style ={{backgroundColor:"white", height:"10px", width:"1000%"}}></div>
        </>
    )
}