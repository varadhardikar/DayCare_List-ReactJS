/* FILE TO IMPLEMENT ROUT BETWEEN PAGES TO NAVIGATE */


/* IMPORTING ALL REQUIRED LIBRARIES AND FILES */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home} from './home' ;
import {LocationDetail} from './location-details';


/* ROUTING */

export const App = ()=>{

   return (<>
       <Router>
          <Switch>
                <Route exact path="/">
                        <Home />
                 </Route>
             <Route path="/location/:id">
                  <LocationDetail />
             </Route>
           </Switch>
       </Router>
   </>) 
}