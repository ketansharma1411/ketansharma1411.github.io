import React, { useState } from "react";
import styled from "styled-components";
export function Roledice({select,count,reset_count}){

    var [currdice,setcurrdice]=useState(1);

    

    const generateRandomNumber=(min,max)=>{
        // console.log(Math.floor(Math.random()*(max-min)+min))
        return Math.floor(Math.random()*(max-min)+min);
    }
    const roledice=()=>{
        var randomnumber=generateRandomNumber(1,7)
        setcurrdice(currdice=randomnumber)
        if(select<currdice){
            reset_count(count=count-(currdice-select))
        }
        else if(select>currdice){
            reset_count(count=count-(select-currdice))
        }
        else{
            reset_count(count=count+select)
        }
        
        
    }
    
    return(
        <>
            <Roller >
                    <div className="logo" onClick={roledice} >
                        <img src={`images/dice_${currdice}.png`} ></img>
                    </div>
                    <div className="con">
                        <h2 >Click on dice to roll</h2>
                    </div>
            </Roller>
        
        </>
    )
}

const Roller=styled.div`
.logo img{
    width: 8rem;
    height: auto;
    margin-left: 45px;
}
.con{
    margin-top: -30px;
}
`