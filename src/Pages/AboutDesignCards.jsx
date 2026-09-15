import { DesignCards } from "../Components/DesignCards"
import UsingOurCards from "../Components/UsingOurCards"
import Heading from "../Components/Heading"
import riverImage from "../assets/river.jpg"
import './HomePage.css'

 
export function AboutDesignCards(){
    return(
        <>
            <Heading 
                img={riverImage}
                title="Design Cards"
                variant="design"
                >
                    
            </Heading>
         <div className="line"></div>
                <DesignCards></DesignCards>

            <div className="line"></div>
                <UsingOurCards></UsingOurCards>
            <div className="line"></div>
        </>
    )
}