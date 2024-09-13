const calculateAqi = (req, res, next) => {
    const {
      gasModule1Value = 25,
      gasModule2Value = 25,
      gasModule3Value = 25,
      gasModule4Value = 25,
      gasModule5Value = 25,
      gasModule6Value = 25,
      gasModule7Value = 25,
      gasModule8Value = 25,
      temperature = 25,
      humidity = 25
    } = req.body;
  
    // Parse incoming values
    const gas1 = isNaN(parseFloat(gasModule1Value)) ? 25 : parseFloat(gasModule1Value);
    const gas2 = isNaN(parseFloat(gasModule2Value)) ? 25 : parseFloat(gasModule2Value);
    const gas3 = isNaN(parseFloat(gasModule3Value)) ? 25 : parseFloat(gasModule3Value);
    const gas4 = isNaN(parseFloat(gasModule4Value)) ? 25 : parseFloat(gasModule4Value);
    const gas5 = isNaN(parseFloat(gasModule4Value)) ? 25 : parseFloat(gasModule4Value);
    const gas6 = isNaN(parseFloat(gasModule4Value)) ? 25 : parseFloat(gasModule4Value);
    const gas7 = isNaN(parseFloat(gasModule4Value)) ? 25 : parseFloat(gasModule4Value);
    const gas8 = isNaN(parseFloat(gasModule4Value)) ? 25 : parseFloat(gasModule4Value);
    const temp = isNaN(parseFloat(temperature)) ? 25 : parseFloat(temperature);
    const hum = isNaN(parseFloat(humidity)) ? 25 : parseFloat(humidity);
  
    console.log(gas1, gas2, gas3, gas4, gas5, gas6, gas7, gas8, temp, hum);
  
    // AQI calculation logic
    function calculateAQIFromGas(gasValue, gasType) {
      let aqi = 0;
      switch (gasType) {
        case 'PM2.5':
          if (gasValue <= 12) aqi = (gasValue / 12) * 50;
          else if (gasValue <= 35.4) aqi = 51 + ((gasValue - 12.1) / (35.4 - 12.1)) * 49;
          else if (gasValue <= 55.4) aqi = 101 + ((gasValue - 35.5) / (55.4 - 35.5)) * 49;
          break;
        case 'CO':
          if (gasValue <= 4.4) aqi = (gasValue / 4.4) * 50;
          else if (gasValue <= 9.4) aqi = 51 + ((gasValue - 4.5) / (9.4 - 4.5)) * 49;
          break;
        case 'NO2':
          if (gasValue <= 53) aqi = (gasValue / 53) * 50;
          else if (gasValue <= 100) aqi = 51 + ((gasValue - 54) / (100 - 54)) * 49;
          break;
        case 'SO2':
          if (gasValue <= 35) aqi = (gasValue / 35) * 50;
          else if (gasValue <= 75) aqi = 51 + ((gasValue - 35) / (75 - 35)) * 49;
          break;
        default:
          aqi = 0;
      }
      return aqi;
    }
  
    // Calculate AQI for each gas
    const aqiGas1 = calculateAQIFromGas(gas1, 'PM2.5');
    const aqiGas2 = calculateAQIFromGas(gas2, 'CO');
    const aqiGas3 = calculateAQIFromGas(gas3, 'NO2');
    const aqiGas4 = calculateAQIFromGas(gas4, 'SO2');
    const aqiGas5 = calculateAQIFromGas(gas4, 'SO2');
    const aqiGas6 = calculateAQIFromGas(gas4, 'SO2');
    const aqiGas7 = calculateAQIFromGas(gas4, 'SO2');
    const aqiGas8 = calculateAQIFromGas(gas4, 'SO2');
  
    // Determine overall AQI
    req.body.overallAQI = Math.max(aqiGas1, aqiGas2, aqiGas3, aqiGas4, aqiGas5, aqiGas6, aqiGas7, aqiGas8);
    req.body.aqiDetails = {
      CO: aqiGas1,
      NO: aqiGas2,
      NO2: aqiGas3,
      O3: aqiGas4,
      SO2: aqiGas4,
      PM2_5: aqiGas4,
      PM10: aqiGas4,
      NH3: aqiGas4,
    };
  
    // Proceed to the next middleware or route handler
    next();
  };
  
  module.exports = calculateAqi;
  

 

