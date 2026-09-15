import './home.css'
import './card.css'
import { useState } from 'react';
import { Card } from './Card';
import purchasesIcon from "../assets/purchases.png"
import shelterIcon from "../assets/shelter.png"
import transportationIcon from "../assets/transportation.png"
import foodIcon from "../assets/food.png"


const pathwayCards=[
    <div className="pathway-card-wrapper">
    <Card 
      logoSrc={foodIcon}
      variant = "foodpathway"
      title="FOOD/WATER"
      imgFormat ="pathway"
      footer="Food/Water Pathway Cards"
    >
    <div><div style={{ height: "2px", backgroundColor: "#2E6417", width: "90%", margin: "20px" }} /></div>
    encourages the environmentally friendly production and consumption of food and water by consuming less water in and outside of our homes while also wasting less food. The goals for this pathway are improving water use efficiency, ending food and water scarcity and reducing pollution.
    </Card></div>,

   <div className="pathway-card-wrapper">
     <Card 
        logoSrc={transportationIcon}
        variant = "transpathway"
        title="TRANSPORTATION"
        imgFormat ="pathway"
        footer="Transportation Pathway Cards"
     >
     <div><div style={{ height: "2px", backgroundColor: "#B8612B", width: "90%", margin: "20px" }} /></div>
      encourages the use of environmentally friendly modes of transportation like public transportation or carpooling. In doing this we hope to minimize the carbon emissions that are produced by on road vehicles while also providing more cost effective environmentally friendly modes of transportation.
     </Card></div>,

    <div className="pathway-card-wrapper">
     <Card 
        logoSrc={shelterIcon}
        variant = "shelterspathway"
        title="SHELTER/ENERGY"
        imgFormat ="pathway"
        footer="Shelter/Energy Pathway Cards"       
    >
     <div><div style={{ height: "2px", backgroundColor: "#0097B2", width: "90%", margin: "20px" }} /></div>
      focuses on creating sustainable housing using:less and renewable power, efficient designs and eco-friendly materials to reduce emissions and improve living conditions.
    </Card></div>,

    <div className="pathway-card-wrapper">
    <Card 
        logoSrc={purchasesIcon}
        variant = "purchasepathway"
        title="CONSUMER PURCHASES"
        imgFormat ="pathway"
        footer="Consumer Purchases Pathway Cards"
    >
    <div><div style={{ height: "2px", backgroundColor: "#C5192D", width: "90%", margin: "20px" }} /></div>
        tracks the lifecycle of products people buy: how they're made, transported, used, and thrown away, and how each stage contributes to carbon emissions, waste, and resource depletion.
     </Card></div>
];

function PathwayBox(){
    const [index,setIndex] = useState(0);
    const nextCard = () =>{
         setIndex((i) => (i + 1) % pathwayCards.length);

    }
    const prevCard = () =>{
        setIndex((i) => (i - 1 + pathwayCards.length) % pathwayCards.length);
        
    }
    return (
        <div>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"left", gap:"20px"}}>
                <span className="home-info">1. Pick a Pathway</span>
                {pathwayCards[index]}
            </div>
            <div style={{display:"flex",alignItems:"center", justifyContent:"left", gap:"10px", paddingTop:"25px"}}>
                <button className="pathways-button" onClick={prevCard}>Back</button>
                <button className="pathways-button" onClick={nextCard}>Next</button>
            </div>
       </div>
    )
}

const valueCards=[
    <div className="villanova-card-wrapper">
    <Card
        title="VILLANOVA CARDS"
        footer="Villanova Value Cards"
        variant="unitas"
        imgFormat ="villanova"
    >
    <div><div style={{ height: "2px", backgroundColor: "#294f8d", width: "90%", margin: "20px" }} /></div>
    based off of Villanova's core Augustinian values of Veritas, Unitas and Caritas, these cards call us to live our lives with truth, integrity and love.
    </Card></div>,
    <div className="pathway-card-wrapper">
    <Card variant='laudatosi'
        title="LAUDATO SI CARDS"
        footer="Laudato Si Value Cards"
        imgFormat="laudatosi"
    >
    <div><div style={{ height: "2px", backgroundColor: "#255c26", width: "90%", margin: "20px" }} /></div>
    inspired by Pope Francis's encyclical "Laudato Si", these cards provide guidance on urgent and immediate actions we can take in the care of our common home. 
     </Card></div>,

    <div className="villanova-card-wrapper">
     <Card
        title="SUSTAINABLE DEVELOPMENT CARDS"
        footer="SDGS Value Cards"
        variant="caritas"
        imgFormat ="villanova"
        >
    <div><div style={{ height: "2px", backgroundColor: "#a52424", width: "90%", margin: "20px" }} /></div>
        adapted from the United Nations, these cards outline a global plan end poverty, protect our planet, and ensure that all people have peace and prosperity by 2030.
    </Card></div>

]

function ValueBox(){
    const [index,setIndex] = useState(0);
    const nextCard = () =>{
         setIndex((i) => (i + 1) % valueCards.length);

    }
    const prevCard = () =>{
        setIndex((i) => (i - 1 + valueCards.length) % valueCards.length);
        
    }
    return (
        <div>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"left", gap:"27px"}}>
                <span className="home-info">2. Pick a Value Set</span>
                {valueCards[index]}
            </div>
            <div style={{display:"flex",alignItems:"center", justifyContent:"left", gap:"10px", paddingTop:"35px"}}>
                <button className="pathways-button" onClick={prevCard}>Back</button>
                <button className="pathways-button" onClick={nextCard}>Next</button>
            </div>
       </div>
    )
}


const CardTypes=[
   {title:"Use these cards in your workshops or other activities to frame sustainability issues under specific value sets. ",image:""}
]
function CardType({title, image}){
    return(
       <div style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center", gap:"27px"}}>
        <span className="home-info">3. Apply the Cards</span>
        <div style={{width:"clamp(18rem, 21vw, 20rem)", height:"clamp(28.5rem, 20vw, 400rem)",borderRadius:"15px", backgroundColor:" rgb(174, 219, 198)",display:"flex",alignItems:"center", justifyContent:"center", border:"5px solid darkgreen",boxShadow: "5px 10px 10px rgb(244, 244, 244)" }}>
            <img src={image}></img>
            <span style={{fontSize:"25px",color:"rgb(139, 94, 17)", textAlign:"center"}}>{title}</span>
        </div>
       </div>
    )
}
export function UsingOurCards(){
    const LinkCardElements = CardTypes.map((card) => (
    <CardType key={card.title} title={card.title} image={card.image} />
    ));
    return(
        <>
        <div style={{margin:"30px",display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h className="home-text">Using Our Cards</h>
        </div>
        <section style={{display:"flex",flexWrap:"wrap",justifyContent:"center", alignItems:"center", gap:"clamp(.1rem, 10vw, 16rem)"}}>    
            <PathwayBox /> 
            <ValueBox/>
            {LinkCardElements}
        </section>
        </>
    )
}

export default UsingOurCards