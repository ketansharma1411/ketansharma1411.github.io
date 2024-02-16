import React from "react";
import styled from "styled-components";


export function Gamestart(props){
    // console.log(props.data)
    return(
        <>
        
        
            <Game>
                <div className="container">
                    <div className="imag">
                        <img src="images/dice.png" alt="sorry"></img>
                    </div>
                    <div className="content">
                        <h1>DICE GAME</h1>
                        <button onClick={props.data}>Play Now</button>
                    </div>
                </div>

            </Game>
        </>
    )
}
// styling part

const Game=styled.header`
.imag img{
    width: 33rem;
    height: 28rem;
    margin-top: 15px;
}
.content h1{
    font-family: 'Poppins', sans-serif;
    color: black;
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.content{
    margin-top:120px;
    margin-bottom: 0;
}
.content button{
    display: flex;
width: 7.75rem;
padding: 0.625rem 1.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.625rem;
margin-left: 225px;
margin-top: -50px;
border-radius: 0.3125rem;
background: #000;
color: white;
border:1px solid transparent;
}
.content button:hover{
    cursor: pointer;
    border: 1px solid black;
    background-color: white;
    color: black;
    transition: 0.1s ease-in;
}
.container{
    display: flex;
}

`