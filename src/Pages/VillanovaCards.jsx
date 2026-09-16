import heartIcon from "../assets/heart.png"
import scaleIcon from "../assets/scale.png"
import armsIcon from "../assets/arms.png"
import {Card} from "../Components/Card"
import Heading from "../Components/Heading"
import farmIcon from "../assets/farm.jpg"
import VillanovaCardsPDF from "../assets/VillanovaCards.pdf"

export function VillanovaCards(){
    return(
        <>
        <Heading
        img={farmIcon}
        title="Villanova Value Cards"
        theme="light"
        >
            Our Villanova Value cards are created based on Villanova's Augustinian values of Caritas, Veritas, and Unitas. These cards can be used to frame sustainability through an Augustinian lens by promoting
             St. Augustine's call towards environmental stewardship and care for all life.<a className="pathway"href ={VillanovaCardsPDF} download ="Villanova Value Cards.pdf"> Download Cards Here!</a>     
        </Heading>
         <div style ={{backgroundColor:"white", height:"10px", width:"100%"}}></div>
        <div style={{display:"flex",flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:"100px",paddingBottom:"100px",paddingTop:"15px", backgroundColor:"rgb(74, 162, 135)",
           backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.18) 1.5px, transparent 1.5px), radial-gradient(rgba(255, 255, 255, 0.17) 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px, 40px 40px",backgroundPosition: "0 0, 15px 15px"}}>
            <Card
                title="CARITAS: LOVE"
                footer="Villanova Value Cards"
                imgSrc={heartIcon}
                variant="caritas"
                imgFormat ="villanova"
                imgAlt="Illustration representing Caritas:Love"
            >
            <div><div style={{ height: "2px", backgroundColor: "#a52424", width: "90%", margin: "20px" }} /></div>
                Focuses on service, empathy, care for the vulnerable, and a commitment to the common good. 
            </Card>
        <div style={{alignSelf: "flex-start", marginTop: "80px"}}>
             <Card
                title="VERITAS: TRUTH"
                footer="Villanova Value Cards"
                imgSrc={scaleIcon}
                variant="veritas"
                imgFormat ="villanova"
                imgAlt="Illustration representing Veritas:Truth"
            >
            <div><div style={{ height: "2px", backgroundColor: "#298d2a", width: "90%", margin: "20px" }} /></div>
                Represents the academic pursuit of knowledge, intellectual courage, and integrity.
            </Card>
        </div>

            <Card
                title="UNITAS: UNITY"
                footer="Villanova Value Cards"
                imgSrc={armsIcon}
                variant="unitas"
                imgFormat ="villanova"
                imgAlt="Illustration representing Unitas:Unity"
            >
             <div><div style={{ height: "2px", backgroundColor: "#126298", width: "90%", margin: "20px" }} /></div>
                Emphasizes building community, fostering belonging, and promoting collaboration among students, faculty, and staff.
            </Card>
        </div>
        </>
    )
}