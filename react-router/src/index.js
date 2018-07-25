/* Core components */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* My Components */
import Navbar from './js/components/Navbar';
import Home from './js/containers/Home';
import TemperatureCalculator from './js/temperature-converter/containers/TemperatureCalculator';
import FilterableProductTable from './js/product-search-data-table/containers/FilterableProductTable';

const App = () => (
   <BrowserRouter>
      <div>
         <Navbar />
         <div className="container mt-5">
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/temperature-calculator" component={TemperatureCalculator} />
               <Route path="/product-search-data-table" component={FilterableProductTable} />
            </Switch>
         </div>
      </div>
   </BrowserRouter>
);

export default App;

ReactDOM.render(<App />, document.getElementById('root'));