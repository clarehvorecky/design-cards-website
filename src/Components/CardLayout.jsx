import planeIcon from "../assets/planePeople.jpg"
import turbineIcon from "../assets/windTurbine.jpg"
import cropIcon from "../assets/food.jpg"
import clothesIcon from "../assets/clothes.png"
import purchasesIcon from "../assets/purchases.png"
import shelterIcon from "../assets/shelter.png"
import transportationIcon from "../assets/transportation.png"
import foodIcon from "../assets/food.png"
export function SustainabilityCardsLayout ({id,background, children,pathwayTitle,pathway}){

     const pathwayColors ={
        transportation:{background:"#F6E5BB", title:"#8d6228",img:planeIcon, alt:"image of people looking at a plane representing Transportation", nav:"#b47211"},
        shelterEnergy:{background:"rgb(192, 245, 252)",title:"rgb(23, 100, 110)",img:turbineIcon, alt:"image of a wind turbine representing Shelter & Energy"},
        foodWater:{background:"rgb(205, 255, 213)",title:"rgb(11, 108, 27)",img:cropIcon, alt:"image of a tomato plant and crops representing Food & Water"},
        consumerPurchases:{background:"rgb(253, 209, 209)",title:"rgb(116, 17, 17)",img:clothesIcon, alt:"image of clothing on a clothes rack representing Consumer Purchases"},
    };
   const { background: backgroundColor, title: titleBackgroundColor, img:imgSrc, nav:navColor, alt:imgAlt } = pathwayColors[pathway] || {};

    return(
        <div style ={{backgroundColor, width:"100%", minHeight:"950px", display:"grid",  justifyContent:"center",alignContent: "center", gap:"20px",border: "11px double #ffffff6c"}}>
       <div style={{display:"flex", flexWrap:"wrap", gap:"40px", justifyContent:"center"}}>
            <div id = {id} style={{backgroundColor:titleBackgroundColor,width:"clamp(280px, 90vw, 950px)", height:"clamp(10px, 26vh, 300px)", display:"grid", flexDirection:"col",alignItems:"center",justifyContent:"center",
                borderRadius:"15px",fontSize:"clamp(32px, 6vw, 80px)",textAlign:"center",fontFamily:"fraunces", fontWeight:"bold",color:"white"}}>
                {pathwayTitle}
            </div>
            <div className="pathway-img">
                <img style ={{height:"100%", width:"100%",borderRadius:"15px"}}src = {imgSrc} alt ={imgAlt}></img>
            </div>
        </div>
            <div className ={`pcards-format ${background}`} style={{flexWrap:"wrap"}}>
                {children}
            </div>
        </div>
    )
}