const TemperatureConvertHelper = {
   /* Convert fahrenheit temperature to celsius temperature */
   toCelsius: fahrenheit => (fahrenheit - 32) * 5 / 9,

   /* Convert celsius temperature to fahrenheit temperature */
   toFahrenheit: celsius => (celsius * 9 / 5) + 32,

   /* Try to convert temperature with an function passed to 
      convert param, which can be toCelsius or toFahrenheit or 
      something else that receives an temperature param */
   tryConvert: (temperature, convert) => {
      const input = parseFloat(temperature);

      if (Number.isNaN(input)) {
         return '';
      }

      return convert(input);
   }

};

export default TemperatureConvertHelper;