import './ResetButton.css'
export function Button({onClick, text,className}){
    const handleClick = (e) => {
    console.log(e);
    if (onClick) {
      onClick(e);
    }
  };
    return(
       <button className ={className} onClick={(e) =>handleClick(e)}> 
            <div className='reset-button-text'>{text}</div>
       </button>
    )
}
export default Button
