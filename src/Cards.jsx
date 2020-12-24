/* JSX FOR CARDS ON HOME PAGE */


/* IMPORTING ALL REQUIRED LIBRARIES AND FILES */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


/* FUNCTION FOR COLLECTING DATA FROM CDATA FILE AND RETURNING IT */

function Card(props){
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="card_img"/>
          <div className="card_info">
        
            <Link to={`/location/${props.id}`}>  <h3 className="card_title"> {props.title} </h3> </Link>
            <span className="card_category"> {props.sname} </span>
          </div>
        </div>
  
      </div>
    </>
    )
  }

export default Card;