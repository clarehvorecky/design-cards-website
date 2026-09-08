import './CardMenu.css'
export function CardMenu({ onSelect, onClose, className }) {
return(
    <div className ={`card-menu ${className}`}>
    <div style ={{paddingBottom:"10px"}}> Select your card type:</div>
        <ul>
            <li onClick={() => onSelect("global")}>Global Cards</li>
            <li onClick={() => onSelect("national")}>National Cards</li>
            <li onClick={() => onSelect("local")}>Local Cards</li>
            <li onClick={() => onSelect("blank")}>Blank Cards</li>
        </ul>
    <div style ={{paddingTop:"10px"}}><button onClick={onClose}>Close</button></div>
    </div>
)
}

export default CardMenu