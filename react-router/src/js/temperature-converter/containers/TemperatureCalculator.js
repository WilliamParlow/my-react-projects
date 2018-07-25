import React, { Component } from "react";
import Calculator from '../components/Calculator';

class TemperatureCalculator extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <Calculator />
      );
   }
}

export default TemperatureCalculator;