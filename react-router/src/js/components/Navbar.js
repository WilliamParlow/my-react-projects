import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">React Router</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                  <Link to="/">Home</Link>
                  <Link to="/temperature-calculator">Temperature Calculator</Link>
                  <Link to="/product-search-data-table">Product Table</Link>
               </div>
            </div>
         </nav>
      );
   }
}

export default Navbar;