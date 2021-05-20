import React, { useState } from "react";





const Learn = () => {

    let [count, setCount] = useState(0);

    const time = new Date().toLocaleTimeString();

  const [currTime, setCurrTime] = useState(time);
  const currDate = new Date().toLocaleDateString();

  const getTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrTime(time);

  }

  setInterval(getTime, 1000);


    const IncNum = () => {
        setCount(count + 1 );
    }

    const DecNum = () => {
        if(count <= 0) {
            alert(' Ooppsss, negative values are not allowed!');
        } else {
            setCount(count - 1);
        }
        
    }

    

    return (
           <>
           <div className="first_full">
            <div className="common">
    <h1 className="uperh1"> Date - {`${currDate}`}</h1>
   
         <h1 className="uperh1"> {currTime} </h1>
           </div>
           <h1 className="count_style"> 
         {count}  </h1>
       
        <div
        className="direct">
        <button 
        className="stylee"
        onClick={IncNum}>
            +
        </button>
        <button 
        className="stylee"
        onClick={DecNum}>
        -
        </button>

        </div>
        <hr/>
        </div>
        
        </>
    );

};
export default Learn;