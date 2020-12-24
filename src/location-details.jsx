/* JSX FOR DATA ON CLICK APPEARING PAGES */


/* IMPORTING ALL REQUIRED LIBRARIES AND FILES */

import React from "react";
import Ddata from "./Ddata";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";


/* FUNCTION FOR COLLECTING DATA FROM DDATA AND RETURNING IT */

export const LocationDetail = ()=>{
    let { id } = useParams();
    const location = Ddata.find(i=>i.id==id) ;

    return(
        <>
        {/*JSON.stringify(location)*/}
        <h1 className="heading"> {location.title} </h1>
          <div className="Data">
            <div className="data">
              <img src={location.imgsrc} alt="mypic" className="data_img"/>
              <div className="data_info">
                {/* <h3 className="data_title">{location.title}</h3> */}
                <h6 className="data_add"> {location.adds} </h6>
                <p className="data_about">{location.about}</p>
              </div>
            </div>
          </div>
        </>
      )

}