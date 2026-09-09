import {useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import {CustomCard } from "./CustomCard";
import {CardMenu} from "./CardMenu";
import {CardButton} from "./CardButton";
import {Button} from "./Button";
import { useReactToPrint } from "react-to-print";
import './card.css'
function CardOpener({className, buttonClassName, logoSrc, variant, footer,pathwayTitle,lineColor}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

 //*change save cards button */
  const [isSaved, setIsSaved] = useState(false);
  const saveCardsToStorage = () => {
    localStorage.setItem(storageKey, JSON.stringify(cards));
    setIsSaved(true);
  };

/*create new card with uni key */
const storageKey = `${pathwayTitle}`;
  const [cards, setCards] = useState(() =>{
    const storedCards = localStorage.getItem(storageKey);
    return storedCards ? JSON.parse(storedCards) :[];
  });

  const pathwayBorderColor ={
    transportation:"#79541c",
    shelterenergy:"#194e57",
    foodwater:"#3a6e20",
    consumerpurchases:"#8b2a2a",
  };
  const cardBorderColor = pathwayBorderColor[pathwayTitle];

  /*delete mode */
  const [deleteMode, setDeleteMode] = useState(false);
  const toggleDeleteMode = () =>{
    setDeleteMode((prev)=> !prev);
  };

  const [storedDeletedCard, setStoredDeletedCard] = useState([]);

  const deleteCard = (cardIdToRemove) =>{
      const cardToDelete = cards.find((card)=> card.id === cardIdToRemove);
      setStoredDeletedCard((prevDeleted) => [...prevDeleted, cardToDelete]);

    setCards((prev) => {
      const remainingCards = prev.filter((card) => card.id !== cardIdToRemove);
      localStorage.setItem(storageKey, JSON.stringify(remainingCards));
      setIsSaved(false);
      return remainingCards;
    });
  };

/**undo delete */
  const undoDelete = () =>{
    if (storedDeletedCard.length === 0) return;

    const cardToRestore = storedDeletedCard[storedDeletedCard.length - 1];
    
    setCards((prev) => {
      const restoredCards = [...prev,cardToRestore];
      localStorage.setItem(storageKey, JSON.stringify(restoredCards));
      return restoredCards;
    })
    setIsSaved(false);
    setStoredDeletedCard((prev) => prev.slice(0, -1));
  }
   
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  /*set card limit */
  const [isCardLimit,setIsCardLimit] = useState(false);
  useEffect(() => {
  if (cards.length >= 12) {
    setIsCardLimit(true);
  } else {
    setIsCardLimit(false);
  }
}, [cards]);


  const handleSelect = (cardType) => {
    const newCard ={
      id:crypto.randomUUID(),
      type:cardType,
      title:null,
      bodyText:null,
      currentIndex:null,
    };
    setCards((prev) => [...prev, newCard])
    setIsModalOpen(false);
    setIsSaved(false);
  };

  /**update card info to state */
  const handleUpdateCard = (cardId, updatedFields) => {
  setCards((prev) =>
    prev.map((card) =>
      card.id === cardId ? { ...card, ...updatedFields } : card
    )
  );
  setIsSaved(false);
  };

 const handleClose = () => {
    setIsModalOpen(false);
  };

  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `${pathwayTitle}-cards`,
    preserveAfterPrint: true,
  });


  return (
   <> 
   <div
      style={{
        position: "relative",
        width: "fit-content",
      }}
    ></div>
   <div style ={{display: "flex", flexShrink:0,flexWrap: "nowrap", gap: "20px",overflowX: "auto", height: "95%",paddingLeft:"20px", paddingRight:"20px" ,borderRadius:"10px", 
   width: "95%",maxWidth:"1000px",border:("2px solid"),  alignItems:"center",borderColor:cardBorderColor}}>
    <div ref={printRef} className="printable-cards">
      {cards.map((card) => (
        <CustomCard /*formatting card slider and cards/create card button */
          key={card.id}
          type={card.type}
          title={card.title}
          bodyText={card.bodyText}
          currentIndex={card.currentIndex}
          onUpdateCard={(updatedFields) => handleUpdateCard(card.id, updatedFields)}
          onDeleteCard={()=>deleteCard(card.id)}
          isDeleteMode={deleteMode}
          logoSrc={logoSrc} 
          variant={variant}
          footer={footer}
          pathwayTitle={pathwayTitle}
          lineColor={lineColor}
          borderColor={cardBorderColor}
        />
      ))}
    </div>
        
        {isModalOpen && !isCardLimit?(/*formatting modal distance */
          <CardMenu 
            onSelect={handleSelect}
            onClose={handleClose}
            className={className}
          />
        ):(
       
          <CardButton 
            className={isCardLimit? `${buttonClassName}-disabled`:buttonClassName}
            icon={isCardLimit? null:<i className="bi bi-plus-lg plusIcon"></i>} 
            text={isCardLimit? "You've reached the card limit!":"click the plus to create a custom card!"}
            onClick={isCardLimit? undefined:handleOpenModal}
      
        />
        )
       }
     </div>
   
      <>
      <div>
     
        <div style ={{ gap:"10px",display:"flex",flexDirection:"row",justifyContent:"center", position:"absolute",alignItems:"center",right:"45px", top:"25px",}}>

        {storedDeletedCard.length>0 &&  (
        <button className="undo-button" onClick={undoDelete}>
          <i className="bi bi-arrow-counterclockwise"></i>
         </button>
        )}

        
        <Button 
          className ="reset-button"
          onClick={toggleDeleteMode}
          text ={deleteMode? "Cancel" : "Delete Cards"}
        />
         <Button 
          className ="reset-button"
          onClick={saveCardsToStorage}
          text={isSaved? "Cards Saved": "Save Cards"}
        />
        <Button
          className="reset-button"
          onClick={handlePrint}
          text="Download Cards"
        />
        
        </div>
     
      </div>
      </>
      <p style={{ position: "absolute", bottom: "25px", right: "50px", fontSize:"17px", color:isCardLimit?"red":"black" }}>
        {cards.length}/12 cards created
      </p>
    </>
 
  );
}
export default CardOpener;
