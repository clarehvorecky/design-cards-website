import { useState } from "react";

export function NotificationPopup({isOpen, onClose}){
    if (!isOpen) return null;
    return(
        <div>
            <div style={{zIndex:10, width:"300px", height:"200px", backgroundColor:"rgba(250, 250, 250, 0.90)", position: "fixed", top: "20px",right: "20px", 
                fontSize:"20px", textAlign:"center", display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center", gap:"10px", 
                 boxShadow: "0 4px 12px rgba(235, 209, 157, 0.44)", border: "4px solid rgb(161, 116, 38)"}}>
                <p>Please use FireFox or Chrome for best downloading results!</p>
                <button style={{color:"rgb(126, 34, 25)", fontSize:"15px", padding:"10px", backgroundColor:"rgb(126, 34, 25,.4)",borderRadius:"10px",cursor: "pointer"}}onClick={onClose}>
                    close
                </button>
            </div>
        </div>
    )
}

export default NotificationPopup;