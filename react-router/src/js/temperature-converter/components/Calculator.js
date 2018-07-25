import React, { Component } from 'React';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import TemperatureConvertHelper from '../helpers/TemperatureConvertHelper';
import SplitPane from './SplitPane';

class Calculator extends Component {
   constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = { temperature: '', scale: '' };
   }

   handleCelsiusChange(temperature) {
      this.setState({ scale: 'c', temperature });
   }

   handleFahrenheitChange(temperature) {
      this.setState({ scale: 'f', temperature });
   }

   render() {
      const { temperature, scale } = this.state;
      const celsius = scale === 'f'
         ? TemperatureConvertHelper.tryConvert(temperature, TemperatureConvertHelper.toCelsius)
         : temperature;
      const fahrenheit = scale == 'c'
         ? TemperatureConvertHelper.tryConvert(temperature, TemperatureConvertHelper.toFahrenheit)
         : temperature;

      return (
         <div>
            <SplitPane
               left={
                  <TemperatureInput
                     scale="c"
                     temperature={celsius}
                     onTemperatureChange={this.handleCelsiusChange} />
               }
               right={
                  <TemperatureInput
                     scale="f"
                     temperature={fahrenheit}
                     onTemperatureChange={this.handleFahrenheitChange} />
               }
            />
            <BoilingVerdict
               celsius={parseFloat(celsius)} />
         </div>
      );
   }
}

export default Calculator;