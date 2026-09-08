import './home.css'
import { Link } from 'react-router-dom'
const CardTypes=[
    {title:"Pathway Cards",info:"Explore sustainability issues like Transportation, Food/Water, Shelter/Energy & Consumer Purchases" ,image:"",path:"SustainabilityCards"},
    {title:"Value Cards", info:"Understand environmental issues under value sets of frameworks.",image:"",path:"LaudatoSiCards"}, 
    {title:"Custom Cards",info:"Build your own Design Cards catered to your local communities.",image:"",path:"CreateYourCards"}
]
function CardType({title,image,info,path}){
    const cardStyle = {
        width: "clamp(350px, 91vw, 500px)",
        height: "clamp(100px, 8.5vw, 400px)",
        borderRadius: "15px",
        backgroundColor: "rgb(212, 243, 229)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
        gap: "10px",
        boxShadow: "0 4px 12px rgba(235, 209, 157, 0.44)",
        border: "2px solid rgb(161, 116, 38)",
    };

    const titleStyle = {
        fontSize: "clamp(1.2rem, 1.7vw, 3.5rem)",
        color: "rgb(111, 20, 2)",
        fontWeight:"bold",
    };

    const infoStyle = {
        color:"rgb(31, 30, 30)",
        textAlign: "center",
        fontSize: "clamp(1.1rem, 3vw, 1.5rem)"
    };
    return(
        <div style={cardStyle}>
           <Link to={path} style={titleStyle}>{title}</Link>
            <span style={infoStyle}>{info}</span>
            <img src={image}></img>
        </div>
    )
}


export function DesignCards(){
    const LinkCardElements = CardTypes.map((card) => (
    <CardType key={card.title} title={card.title} image={card.image} info={card.info} path={card.path}/>
    ));
    return(
        <>
        <div style={{margin:"30px", display:"flex", alignItems:"center", marginLeft:"100px"}}>
            <h3 className="home-text"> What are Design Cards?</h3>
        </div>
        <section style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
            <div style={{display:"flex", gap: "clamp(.001rem, 1vw, 4rem)", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
                <div className="design-cards-info">
                   <p className='design-cards-text'><span className='brown'>Design Cards</span> are physical or virtual decks used to promote creativity and collaboration in teams, research studies,
                    or other interactive activities. Each card often contains prompts, value sets, motivational sayings, images, or other
                    factual information that make complex ideas easier to understand and discuss. By providing a shared framework for discussion, Design Cards allow <span className='brown'>everyone </span>to participate 
                    and add meaningful insight to the conversation. 
                    </p>
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:"20px"}}> 
                    {LinkCardElements}
                </div>
            </div>    
        </section>
        </>
    )
}

export default DesignCards