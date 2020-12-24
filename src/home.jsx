/* JSX FORM HOME PAGE */


/* IMPORTING ALL REQUIRED LIBRARIES AND FILES */

import React from 'react';
import Card from './Cards';

import Cdata from "./Cdata";


/* DECLARING CONSTANT */

const name = "Daycare List"


/* EXPORTING CONTENT THROUGH ROUTER FOR RENDERING IN REACT-DOM */

export const Home =()=>{

    return (<>
        <h1 className="heading"> {name} </h1>
        {Cdata.map(
            (val)=>(
             <Card 
             imgsrc={val.imgsrc}
             title={val.title}
             sname={val.sname}
             id={val.id}
             link={val.link}/>)
        )}
   
      </>) ;
}