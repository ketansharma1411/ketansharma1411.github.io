import React from "react";
import { useState } from "react";
import { Gamestart } from "./gamestart";
import { Gameplay } from "./gameplay";
export function Home(){
    const [isstarted,setstatus]=useState(false)
    function play(){
        setstatus((prev)=>!(prev))
        console.log(isstarted)
    }
    return(
        <>
            {
                isstarted? <Gameplay/>:<Gamestart data={play}/>
            }
        </>
        
    )
}