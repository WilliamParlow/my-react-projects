import React, { Component } from 'react';

const scaleNames = {
   c: 'Celsius',
   f: 'Fahrenheit'
};

class TemperatureInput extends Component {
   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { temperature: '' };
   }

   handleChange(event) {
      this.props.onTemperatureChange(event.target.value);
   }

   render() {
      const { temperature } = this.props;
      const { scale } = this.props;
      return (
         <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:&nbsp;</legend>
            <input
               type="number"
               className="form-control"
               value={temperature}
               onChange={this.handleChange} />
         </fieldset>
      );
   }

}

export default TemperatureInput;