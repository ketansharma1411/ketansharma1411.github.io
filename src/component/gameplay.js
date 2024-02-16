import React, { useState } from "react";
import styled from "styled-components";
import { Roledice } from "./roller";
export function Gameplay(){
    var[count,reset_count]=useState(0)
    
       function reset(){
        reset_count(count=0)
       }
       function show(curr){
        
        if(curr.target.parentElement.parentElement.nextElementSibling.style.display=='block'){
            
            curr.target.parentElement.parentElement.nextElementSibling.style.display='none'
        }
        else{
            curr.target.parentElement.parentElement.nextElementSibling.style.display='block'
        }

        console.log(curr)
       }

       var arr=[1,2,3,4,5,6]

       var [select,setselect]=useState(0)

       
       
       console.log(select)
       
    return(
        <>
        
        <Game1 >
            <div className="main">
            <div className="navbar">
                <div className="count">
                    <h4>{count}</h4>
                    <h2>Total Score</h2>
                </div>
                <div className="right_con">
                    <div className="box_section" >
                    {
                    arr.map((value,i)=>
                    <Box isselected={value===select}>
                    <div className="box"  onClick={()=>{setselect(select=value)}}
                    
                    key={i}>{value} </div>
                    </Box>
                    )
                    }
                    </div>
                    
                    
                    
                <h4>Select Number</h4>
                </div>
            </div>
            <div className="rule">
                <div className="content">
                    <Roledice select={select} count={count} reset_count={reset_count}/>
                    <div className="btn">
                        <button className="btn2" onClick={reset}>Reset Score</button>
                        <button className="btn1" onClick={show}>Show Rules</button>
                    </div>
                </div>

                <div className="rulebook">
                    <h3>How to play dice game</h3>
                    <p>1. Select any number</p>
                    <p>2. Click on dice image</p>
                    <p>3. After click on dice if selected number is equal to dice number you will get same point on dice</p>
                    <p>4. If you get wrong guess then the difference of dice    number and selected number will be deducted from your final score.</p>
                    <p>5. If number not selected, 0 will be automatically selected.</p>
                </div>
            </div>
        </div>
        </Game1>
        </>
    )
 }
//  styling
const Box=styled.div`
.box{
    
    width: 50px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 1px solid #000;
    background-color: ${(props)=>props.isselected?"black":"white"};
    color: ${(props)=>props.isselected?"white":"black"};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-family: 'Poppins', sans-serif;

}
.box:hover{
    cursor: pointer;
}

`
const Game1=styled.header`
.navbar{
    width: 100vw;
    height: 4.4rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin-top: 20px;
    margin-left: 20px;
}

ul{
    display: flex;
    margin-top: 50px;
}
ul li{
    list-style:none;
    margin:0 5px
}
.count h4{
    font-size: 30px;
    margin-left: 60px;
    margin-top: 60px; 
    font-family: 'Poppins', sans-serif; 
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.count h2{
    font-size: 20px;
    margin-left: 20px;
    margin-top: -40px;
}
.count{
    margin-top: -40px;
    margin-right: 300px;
}
.right_con{
    
    margin-left: 200px;
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    
    
}
.right_con h4{
    margin-left:80px ;
    font-size: 19px;
    margin-top: 2px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

}
.box_section{
    display: flex;
}


.content{
    background-color: #d8caca3b;
    border-radius: 5px;
    width: 280px;
    height: 292px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.btn{
    display: flex;
    flex-direction:column;
    display: flex;
    
}
.btn button{
    width: 8.75rem;
    padding: 0.625rem 1.125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.3125rem;
    border: 1px solid #000;
    background: #FFF;
    height: 2rem;
    display: flex;
    margin-bottom: 10px;
}


.btn .btn1{
    background-color: black;
    color: white;
}
button:hover{
    cursor: pointer;
}
.rulebook{
    width: 500px;
    height: 230px;
    background-color: #ff00de;
    display: none;
    padding: 1px 2px 0px 10px;
    margin-top: 5px;
    /* margin-left: 80px; */

}
.rulebook p{
    line-height: 18px;
    margin-top: -8px;
    /* font-family: 'Poppins', sans-serif; */
    /* font-style: normal; */
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    
}
.rule{
    margin-top: -40px;
}
.back{
    background: red;
    width: 200px;
    height: 200px;
}

.rulebook_1{
    display: none;
}
`