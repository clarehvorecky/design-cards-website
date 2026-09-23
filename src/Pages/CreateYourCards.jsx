import {Card } from "../Components/Card"
import {CardMenu } from "../Components/CardMenu"
import purchasesIcon from "../assets/purchases.png"
import shelterIcon from "../assets/shelter.png"
import transportationIcon from "../assets/transportation.png"
import foodIcon from "../assets/food.png"
import fogIcon from "../assets/fog.jpg"
import Heading from "../Components/Heading"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../Components/CardMenu.css"
import CardOpener from "../Components/CardOpener"
export function CreateYourCards(){
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Heading
        img={fogIcon}
        title="Create Your Own Cards"
        theme="dark">
        Want to utilize our design cards in your studies, research and other workshops 
        but aren't living in Philadelphia area? On this page, customize, save and download
        your own personal pathway cards by entering your own statistics about the  <a className="pathway"href ="#transportation"> Transportation</a>, <a className="pathway"href="#shelter-energy"> Shelter/Energy</a>,    
        <a className="pathway"href="#food-water"> Food/Water</a> & <a className="pathway"href="#consumer-purchases"> Consumer Purchases</a>, pathways to sustainability.
        </Heading>
                <div style ={{backgroundColor:"white", height:"10px", width:"100%"}}></div>
                <div id = "transportation" style ={{backgroundColor:"#F6E5BB", height:"30px", width:"100%"}}></div>
                    <div style ={{display: 'flex', height: '100%', backgroundColor:"#F6E5BB"}}>
                    <div style = {{backgroundColor:"rgb(203, 176, 108)", margin:"10px" ,padding:"4% 2% 4% 2%", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"15px", width:"clamp(100px, 33vw, 2000px)"}}>
                        <Card 
                            logoSrc={transportationIcon}
                            variant = "transpathway"
                            title="TRANSPORTATION"
                            imgFormat ="pathway"
                            footer="Transportation Pathway Cards"
                         >
                        <div><div style={{ height: "2px", backgroundColor: "#8d4b21", width: "90%", margin: "20px" }} /></div>
                            Encourages the use of environmentally friendly modes of transportation like public transportation or carpooling. 
                            In doing this we hope to minimize the carbon emissions that are produced by on road vehicles 
                            while also providing more cost effective environmentally friendly modes of transportation.
                        </Card>

                    </div>
                        <div style={{backgroundColor:"rgb(203, 176, 108)", width:"100%", height: "clamp(600px, 41vw, 900px)",display:"flex", alignItems:"center", justifyContent:"center",margin:"10px",position:"relative", borderRadius:"15px"}}> 
                        <CardOpener
                        className ="card-menu-transportation"
                        buttonClassName = "card-button-transportation"
                        logoSrc={transportationIcon}
                        variant="transpathway"
                        footer="Transportation Pathway Cards"
                        pathwayTitle="transportation"
                        lineColor= "#B8612B">
                        </CardOpener>
                        </div>
                    </div>
                <div style ={{backgroundColor:"#F6E5BB", height:"30px", width:"100%"}}></div>


                <div id= "shelter-energy"  style ={{backgroundColor:"rgb(192, 245, 252)", height:"30px", width:"100%", overflow:"scroll"}}></div>
                    <div style ={{display: 'flex', height: '100%', backgroundColor:" rgb(192, 245, 252)"}}>
                    <div  style = {{backgroundColor:" rgb(124, 188, 196)", padding:"4% 2% 4% 2%",display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"15px", margin:"10px",width:"clamp(100px, 33vw, 2000px)"}}>
                        <Card 
                            logoSrc={shelterIcon}
                            variant = "shelterspathway"
                            title="SHELTER/ENERGY"
                            imgFormat ="pathway"
                            footer="Shelter/Energy Pathway Cards" 
                                  
                        >
                        <div><div  style={{ height: "2px", backgroundColor: "#0097B2", width: "90%", margin: "20px" }} /></div>
                            Focuses creating on sustainable housing using:less and renewable power, efficient designs and eco-friendly materials to reduce emissions and improve living conditions.
                        </Card>
                    </div>
                        <div style={{backgroundColor:" rgb(124, 188, 196)",margin:"10px", width: "100%", height: "clamp(600px, 41vw, 900px)",display:"flex", alignItems:"center", justifyContent:"center",position:"relative", borderRadius:"15px"}}>
                        <CardOpener
                            className ="card-menu-shelter"
                            buttonClassName = "card-button-shelter"
                            logoSrc={shelterIcon}
                            variant="shelterspathway"
                            footer="Shelter/Energy Pathway Cards" 
                            pathwayTitle="shelterenergy"
                            lineColor="#0097B2"
                            >
                        </CardOpener>
                        </div>
                    </div>
                <div style ={{backgroundColor:"rgb(192, 245, 252)", height:"30px", width:"100%"}}></div>


                <div id = "food-water" style ={{backgroundColor:"rgb(205, 255, 213)", height:"30px", width:"100%"}}></div>
                    <div style ={{display: 'flex', height: '100%', backgroundColor:"rgb(205, 255, 213)"}}>
                    <div style = {{backgroundColor:"rgb(136, 211, 147)", padding:"4% 2% 4% 2%",display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"15px", margin:"10px",width:"clamp(100px, 33vw, 2000px)"}}>
                        <Card 
                            logoSrc={foodIcon}
                            variant = "foodpathway"
                            title="FOOD/WATER"
                            imgFormat ="pathway"
                            footer="Food/Water Pathway Cards"
                            
                        >
                        <div><div style={{ height: "2px", backgroundColor: "#2E6417", width: "90%", margin: "20px" }} /></div>
                            Encourages the environmentally friendly production and consumption of food and water by consuming less water in and outside of our homes while also wasting less food. The goals for this pathway are improving water use efficiency, ending food and water scarcity and reducing pollution.
                         </Card>
                    </div>
                        <div style={{backgroundColor:"rgb(136, 211, 147)", width: "100%", height: "clamp(600px, 41vw, 900px)",display:"flex", alignItems:"center", justifyContent:"center",margin:"10px",position:"relative", borderRadius:"15px"}}>
                        <CardOpener 
                            className ="card-menu-food"
                            buttonClassName="card-button-food"
                            logoSrc={foodIcon}
                            variant="foodpathway"
                            footer="Food/Water Pathway Cards"
                            lineColor="#2E6417"
                            pathwayTitle="foodwater">
                        </CardOpener>
                        </div>
                    </div>
                <div  style ={{backgroundColor:"rgb(205, 255, 213)", height:"30px", width:"100%"}}></div>


                <div id = "consumer-purchases" style ={{backgroundColor:"rgb(253, 209, 209)", height:"30px", width:"100%px"}}></div>
                    <div style ={{display: 'flex', height: '100%', backgroundColor:"rgb(253, 209, 209)"}}>
                    <div style = {{backgroundColor:"rgb(230, 156, 156)", padding:"4% 2% 4% 2%",display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"15px", margin:"10px",width:"clamp(100px, 33vw, 2000px)"}}>
                        <Card 
                            logoSrc={purchasesIcon}
                            variant = "purchasepathway"
                            title="COMSUMER PURCHASES"
                            imgFormat ="pathway"
                            footer="Consumer Purchases Pathway Cards"
                        >
                        <div><div style={{ height: "2px", backgroundColor: "#C5192D", width: "90%", margin: "20px" }} /></div>
                            Tracks the lifecycle of products people buy: how they're made, transported, used, and thrown away, and how each stage contributes to carbon emissions, waste, and resource depletion.
                        </Card>
                   </div>
                        <div style={{backgroundColor:"rgb(230, 156, 156)", width: "100%", height: "clamp(600px, 41vw, 900px)",display:"flex", alignItems:"center", justifyContent:"center",margin:"10px",position:"relative", borderRadius:"15px"}}>
                        <CardOpener 
                            className ="card-menu-purchase"
                            buttonClassName="card-button-purchase"
                            logoSrc={purchasesIcon}
                            variant="purchasepathway"
                            footer="Consumer Purchases Pathway Cards"
                            lineColor="#C5192D"
                            pathwayTitle="consumerpurchases">
                        </CardOpener>
                        </div>
                </div>
                <div style ={{backgroundColor:"rgb(253, 209, 209)", height:"30px", width:"100%"}}></div>
            <div style ={{backgroundColor:"white", height:"10px", width:"100%"}}></div>
        </>
    
    )
}