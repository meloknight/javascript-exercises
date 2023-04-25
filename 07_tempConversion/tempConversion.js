const convertToCelsius = function(tempInFahrenheit) {
  let convertedToCelsius = (tempInFahrenheit - 32) / 1.8;
  convertedToCelsius = convertedToCelsius.toFixed(1);
  convertedToCelsius = parseFloat(convertedToCelsius);
  return convertedToCelsius;
};

const convertToFahrenheit = function(tempInCelsius) {
  let convertedToFahrenheit = (tempInCelsius * 1.8) + 32;
  convertedToFahrenheit = convertedToFahrenheit.toFixed(1);
  convertedToFahrenheit = parseFloat(convertedToFahrenheit);
  return convertedToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
