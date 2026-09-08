import './button.css'
export function CardButton({className, icon, text, onClick}){
    const handleClick = (e) => {
    console.log(e);
    if (onClick) {
      onClick(e);
    }
  };
    return(
       <button className ={`card-button ${className}`} onClick={(e) =>handleClick(e)}> 
            {icon}
            <div className='button-text'>{text}</div>
       </button>
    )
}
export default CardButton
