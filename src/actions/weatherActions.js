import {
  SET_MONTH, SET_DAY, SET_WEATHER_TEXT
} from './actionsTypes';

export const setMonth = (month) => ({
  type: SET_MONTH, month
});
export const setDay = (day) => ({
  type: SET_DAY, day
});
export const setWeatherText = (weatherText, weatherEvery3hour) => ({
  type: SET_WEATHER_TEXT, weatherText, weatherEvery3hour
});

export const findWeather = (monthAndDay) => (dispatch) => {
  const weatherIn5DaysUrl = `https://api.openweathermap.org/data/2.5/forecast?id=1880252&appid=c39f3947b671b234f7f5571b40977227&units=metric`;
  const request = new Request(weatherIn5DaysUrl, { method: 'GET' });
  const monthSelectionArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return fetch(request)
    .then((res) => res.json())
    .then((weather) => {
      const { selectedMonth, selectedDay } = monthAndDay;
      const date = new Date((new Date()).getFullYear(), selectedMonth, selectedDay);
      const dateUnix = date.getTime() / 1000;
      const selectedDateWeatherData = {
        temp: 0,
        weather: {}
      };
      const weatherEvery3hour = [];
      let count = 0;

      // weather api returns weather data in every 3 hours
      // daily temperature is the average of the temperature within one day
      // daily weather is the most frequently weather within one day
      weather.list.forEach((weatherData) => {
        if (weatherData.dt >= dateUnix && weatherData.dt < dateUnix + 86400) {
          selectedDateWeatherData.temp += weatherData.main.temp;
          count += 1;
          if (selectedDateWeatherData.weather[weatherData.weather[0].main]) {
            selectedDateWeatherData.weather[weatherData.weather[0].main] += 1;
          } else {
            selectedDateWeatherData.weather[weatherData.weather[0].main] = 1;
          }
          const localtime = new Date(`${weatherData.dt_txt.substring(0, 10)}T${weatherData.dt_txt.substring(11, 20)}Z`);
          weatherEvery3hour.push({
            main: weatherData.main,
            weather: weatherData.weather[0],
            time: localtime.toLocaleString().substring(11, 20)
          });
        }
      });
      let mostFrequentlyWeather = null;
      let maxWeatherFrequence = 0;
      Object.keys(selectedDateWeatherData.weather).forEach((weatherName) => {
        if (selectedDateWeatherData.weather[weatherName] > maxWeatherFrequence) {
          maxWeatherFrequence = selectedDateWeatherData.weather[weatherName];
          mostFrequentlyWeather = weatherName;
        }
      });
      const selectedDateWeather = {
        temp: selectedDateWeatherData.temp ? (`${Math.round(selectedDateWeatherData.temp / count * 100) / 100}°`) : 'Not Available',
        weather: mostFrequentlyWeather || 'Not Available'
      };

      const dayFormatter = new Intl.DateTimeFormat('sg', { weekday: 'long' });
      const selectedDateInfoMessage = `${monthSelectionArray[selectedMonth]} ${selectedDay} - ${dayFormatter.format(date)} (Weather: ${selectedDateWeather.weather}, Temperature: ${selectedDateWeather.temp})`;

      dispatch(
        setWeatherText(selectedDateInfoMessage, weatherEvery3hour)
      );
    })
    .catch(()=>{
      dispatch(
        setWeatherText('Not Available',[])
      );
    });
};

