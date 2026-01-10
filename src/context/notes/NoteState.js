import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState=({children})=> {
   
   
    
    return (
        <NoteContext.Provider  value = {{}}>
            {children}
        </NoteContext.Provider>
    )
}


export default NoteState;