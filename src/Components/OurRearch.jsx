export function OurResearch(){
    return(
        <>
        <div style={{margin:"30px",display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h className="home-text">Our Research</h>
         </div>
        <section style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center",rowGap:"20px"}}>
            <div style={{display:"flex", gap:"20px"}}>
                <div className="our-research-box">
                    <p className="our-research-text">We are researching the intersection between <span className="brown">Technological Design, Sustainability and Religion/Spirituality</span>. 
                    Specifically, we are exploring how an individual's religious values can affect their perspective on environmental
                    issues and sustainability practices. Our Goal is to achieve a better understanding of how one's 
                    religious values can be used as a motivator to <span className="brown">increase sustainability habits</span> in their communities. Using findings
                    from our participatory and speculative design workshops, we want to build a low-code platform that local communities
                    can use to promote sustainable living. We hope to bridge the gap between Technological Design, Sustainability, and 
                    Religion/Spirituality so future researchers can use our findings to develop effective solutions to combat <span className="brown">environmental
                    challenges</span> globally. This research is supported by the U.S National Science Foundation under the Grant #2451074</p>
                </div>
            </div>    
        </section>
        </>
    )
}
export default OurResearch