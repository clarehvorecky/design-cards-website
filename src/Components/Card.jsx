import './card.css'
export const Card = ({variant="laudatosi", imgSrc, logoSrc, title, children, footer, imgFormat, imgSize, titleFormat="default", imgAlt}) =>{
    return(
        <div className = {`card-${variant}`}>
          <h2 className={`card-title-${titleFormat}`}>{title}</h2>  
          <div className="card-info">{children} </div>
          <img className ="card-logo" src ={logoSrc}/>
          <img className={`card-image-${imgFormat} card-image-size-${imgSize}`} src={imgSrc} alt={imgAlt}/>
          <span className="card-footer">{footer}</span>
        </div>
     
    )
}
  