import {
    setDay, setMonth, findWeather, setWeatherText
} from '../../actions/weatherActions';
import weatherReducer from '../weatherReducer';

describe('weatherReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      weather:{
        selectedMonth: null,
        selectedDay: null,
        weatherText: "",
        weatherEvery3hour: []
      }
    };
  });
  it('should return the initial state', () => {
    const expectedResult = state.weather;
    expect(weatherReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the set month action correctly', () => {
    const expectedResult = {
      selectedMonth: 2,
      selectedDay: null,
      weatherText: "",
      weatherEvery3hour: []
    };
    expect(weatherReducer(state.weather, setMonth(2))).toEqual(expectedResult);
  });

  it('should handle the set day action correctly', () => {
    const expectedResult = {
      selectedMonth: null,
      selectedDay: 2,
      weatherText: "",
      weatherEvery3hour: []
    };
    expect(weatherReducer(state.weather, setDay(2))).toEqual(expectedResult);
  });

  it('should handle the set weather text action correctly', () => {
    const expectedResult = {
      selectedMonth: null,
      selectedDay: null,
      weatherText: "test",
      weatherEvery3hour: "test"
    };
    expect(weatherReducer(state.weather, setWeatherText("test","test"))).toEqual(expectedResult);
  });
});
