import { Card } from "./Card"
import {useRef, useState } from "react"
/*icons for card images */
import usaIcon from "../assets/usa.svg"
import worldIcon from "../assets/world.svg"
import recyleIcon from "../assets/recycle.svg"
import recyleBinIcon from "../assets/recyclebin.png"
import holdingEarthIcon from "../assets/earthhold.png"
import plantIcon from "../assets/leaves.png"
import ecologicalIcon from "../assets/ecological.png"
import natureSceneIcon from "../assets/naturescene.png"
import batteryIcon from "../assets/battery.png"
import truckIcon from "../assets/truck.png"
import thriftIcon from "../assets/thrift.png"
import bikeSceneIcon from "../assets/bike.png"
import communityIcon from "../assets/community.png"
import citySceneIcon from "../assets/cityScene.png"
import plusIcon from "../assets/plusIcon.png"
import earthIcon from '../assets/heartearth.png'
import cartIcon from '../assets/shoppingcart.png'
import handIcon from '../assets/hand.png'
import './card.css'

export function CustomCard({type, logoSrc,variant,footer,lineColor,title: savedTitle, bodyText: savedBodyText, currentIndex: savedIndex, onUpdateCard, isDeleteMode,onDeleteCard, cardRef}){
    const cardTypeTitles = {
        global: "GLOBAL ISSUES",
        national: "NATIONAL ISSUES",
        local: "LOCAL ISSUES",
    };
      const cardTypeImage = {
        global: worldIcon,
        local: plusIcon,
        national:usaIcon,
        blank: plusIcon,
    };
     const imgArray =  [{name:"Shopping Cart Icon", src:cartIcon},{ name:"Battery Icon", src:batteryIcon}, {name:"Earth Hovering over Hand", src:handIcon},
        { name:" Recycling Truck Icon", src:truckIcon,},{ name:"Sustainability Icon", src:ecologicalIcon },{name:"Recycling Bin Icon", src:recyleBinIcon, },{name:"Collaboration Icon", src:communityIcon},
        { name:"Hand Holding Earth Icon", src:holdingEarthIcon},{ name:"Thrifting Icon", src:thriftIcon,},{ name:"Plant Icon", src:plantIcon,}, { name:"Bike Scene Icon", src:bikeSceneIcon},
        { name:"City Scene Icon", src:citySceneIcon},{ name:"Nature Scene Icon", src:natureSceneIcon},{name:"Recycle Icon", src:recyleIcon, },{name:"Earth Shaped like a Heart Icon", src:earthIcon}
    ];
    const isTitleEditable = type === "blank";
    const isImageEditable = type === "blank" || type === "local";
    const place_holder ="Enter text here..."
    const defaultImage = cardTypeImage[type];
    const defaultImageIndex = imgArray.findIndex((item) => item.src === defaultImage);
    const startingIndex = defaultImageIndex !== -1 ? defaultImageIndex : null;
    const textRef = useRef(null)
    const titleRef = useRef(null)
    const [title, setTitle] = useState (savedTitle ?? (isTitleEditable?place_holder:cardTypeTitles[type]));
    const [bodyText, setBodyText] = useState(savedBodyText??place_holder);
    const [charCount, setCharCount] =useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(savedIndex??startingIndex);
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const [isLimitReached, setIsLimitReached] = useState(false);
    const [isTitleLimitReached, setIsTitleLimitReached] = useState(false);
   
    

    const currentImageSrc = currentIndex !== null ? imgArray[currentIndex].src : cardTypeImage[type];
    const currentImageAlt = currentIndex !== null ? imgArray[currentIndex].name : "No image selected";

    const placeCursorAtEnd = (el) => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false); 
    selection.removeAllRanges();
    selection.addRange(range);
  };
 
  /*cursor */
    const handleTitleInput = () => {
        const text = titleRef.current;
        let limitReached = false;
       while(text.scrollHeight > text.clientHeight && text.innerText.length>0) {
            text.innerText = text.innerText.slice(0, -1);
            placeCursorAtEnd(titleRef.current);
            limitReached = true;
        }
        setIsTitleLimitReached(limitReached)
     };

      /*text body edit */
    const handleTextInput = () => {
        const text = textRef.current;
        let limitReached = false;
        while(text.scrollHeight > text.clientHeight && text.innerText.length>0) {
            text.innerText = text.innerText.slice(0, -1);
            placeCursorAtEnd(textRef.current);
            limitReached = true;
        }
        setIsLimitReached(limitReached)
        const words = text.innerText.trim().split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
    };

     /*text body clicked on */
    const handleTextFocus = () => {
        const text = textRef.current.innerText;
        if(text== place_holder){
            setBodyText("")
        } 
        setIsFocused(true); 
       
    };

    /*text body clicked off */
    const handleTextBlur = () =>{
        const text= textRef.current.innerText;
        const finalText = text.length <= 0 ? place_holder : text;
       setBodyText(finalText)
       setIsFocused(false);
       onUpdateCard({bodyText:finalText});
    }

    const handleTitleBlur = () =>{
        const newTitle= titleRef.current.innerText;
        const finalTitle = newTitle.length <= 0 ?place_holder: newTitle;
        setTitle(finalTitle);
        onUpdateCard({title:finalTitle});
    };
      const handleTitleFocus = () => {
        const title = titleRef.current.innerText;
        if(title == place_holder){
            setTitle("")
        } 
    };

    /**custom image */
    const handleMainImageClick = () => {
        setIsPickerOpen((prev) => !prev);
    };

    const handleSelectImage = (index) => {
        setCurrentIndex(index);
        setIsPickerOpen(false);
        onUpdateCard({currentIndex:index});
     };
     /**title */
     let titleElement;
     if (isTitleEditable){
        titleElement = (
             <h2 className={`card-title ${isTitleLimitReached ? "limit-reached" : ""}`}
                ref={titleRef}
                contentEditable={true}
                suppressContentEditableWarning={true}
                onInput={handleTitleInput}
                onBlur={handleTitleBlur}
                onFocus={handleTitleFocus}
                style ={{height: "35px",overflow:"hidden", flexGrow:"0", width:"285px"}}
            >
                {title}
            </h2>
        );
     } else {
        titleElement = <h2 className="card-title">{title}</h2>;
     }
    
  
    return(
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", position:"relative"}}>
        {isDeleteMode && (
        <button
            onClick={onDeleteCard}/*trash button */
            style={{position: "absolute",top: "15px",right: "15px",zIndex: 20,cursor: "pointer",background:"none",border: "none",color: "white",fontSize: "20px",
        }}
      >
       <i class="bi bi-trash trash"></i>
      </button>
    )}
    <div ref ={cardRef}>
        <Card
            logoSrc={logoSrc}
            variant={variant}
            footer={footer}
        >
        
            {titleElement} 
        <div><div style={{ height:"2px",backgroundColor:lineColor, width: "90%", margin: "15px" }} /></div>
        <p /*formatting the card informationg and text box*/
            ref={textRef}
            contentEditable ={true}
            suppressContentEditableWarning={true}
            onBlur={handleTextBlur}
            onInput={handleTextInput}
            onFocus={handleTextFocus}
            className={`card-text-box ${isLimitReached ? "limit-reached" : ""}`}
            style ={{height: "122px",overflow:"hidden", flexGrow:"0"}}
        >
        {bodyText}
        </p>

        {isFocused &&(
        <div style={{fontSize:"12px", right:"5px", position:"absolute", color:isLimitReached?"red":"black"}}>
            Word Count: {wordCount}
        </div>
        )}

        <div style={{height:"100px", /*card photo positions */
            paddingTop:"20px", 
            display:"flex",
            justifyContent: "center", 
            alignItems: "center",
            }}>
        <img
            src={currentImageSrc}
            alt={currentImageAlt}
            onClick={handleMainImageClick}/*formatting the main card photo size*/
            style={{ width: "80%",height: "115%",objectFit: "contain", cursor: "pointer",}}  
        />
        </div>
        </Card>
    </div>
    
    {isImageEditable&&isPickerOpen && (/*formatting custom card photos */
        <div style ={{
                backgroundColor:"white",
                position: "absolute",
                top: "265px",  
                left:"21px",      
                display: "flex",
                width:"270px",
                flexWrap: "wrap",
                overflowY:"none",
                justifyContent:"center",
                zIndex:10,
                outline: "2px solid black",
                }}>
        {imgArray.map((item, index) => (
            <img
              key={item.name}
              src={item.src}
              alt={item.name}
              onClick={() => handleSelectImage(index)}
              style={{ width:"43px", height:"43px", cursor: "pointer" }}
            />
          ))}
        </div>
      )}
</div>
)};
