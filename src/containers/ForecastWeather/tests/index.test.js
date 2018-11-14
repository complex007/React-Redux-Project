import React from 'react';
import { shallow, mount } from 'enzyme';
import { ForecastWeather, mapDispatchToProps } from '../ForecastWeather';
import {
    setDay, setMonth, findWeather
} from '../../../actions/weatherActions'
describe.only('<ForecastWeather />', () => {
  let weather;
  beforeEach(() => {
    weather = {
        selectedMonth: null,
        selectedDay: null,
        weatherText: "",
        weatherEvery3hour: []
    };
  });
  it('should render fetch month, day and weather on mount if a id exists', () => {
    const onSetMonthSpy = jest.fn();
    const onSetDaySpy = jest.fn();
    const onFindWeatherSpy = jest.fn();
    mount(<ForecastWeather  weather={weather}  onSetMonth={onSetMonthSpy} onSetDay={onSetDaySpy} onFindWeather={onFindWeatherSpy} />);
    expect(onSetMonthSpy).toHaveBeenCalled();
    expect(onSetDaySpy).toHaveBeenCalled();
    expect(onFindWeatherSpy).toHaveBeenCalled();
  });
  describe('mapDispatchToProps', () => {
    describe('onSetMonth', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSetMonth).toBeDefined();
      });
      it('set month', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSetMonth(2);
        expect(dispatch).toHaveBeenCalledWith(setMonth(2));
      });
    });
    describe('onSetDay', () => {
        it('should be injected', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);
            expect(result.onSetDay).toBeDefined();
        });
        it('set month', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);
            result.onSetDay(2);
            expect(dispatch).toHaveBeenCalledWith(setDay(2));
        });
    });
    describe('onFindWeather', () => {
        it('should be injected', () => {
            const dispatch = jest.fn();
            const result = mapDispatchToProps(dispatch);
            expect(result.onFindWeather).toBeDefined();
        });
    });

  });
});
