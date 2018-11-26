import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './ForecastWeather.css';
import { findWeather, setMonth, setDay } from '../../actions/weatherActions';

export class ForecastWeather extends Component {

  monthSelectionArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  componentDidMount() {
    const today = new Date();
    const selectedMonth = today.getMonth();
    const selectedDay = today.getDate();
    this.props.onSetMonth(today.getMonth());
    this.props.onSetDay(today.getDate());
    this.props.onFindWeather({
      selectedDay, 
      selectedMonth
    });
  }
  componentDidUpdate(){

    // if the selectedDay is larger than the total days of the selected month
    // set selectedDay to 1
    if(this.props.weather.selectedDay > this.getNoOfDays(this.props.weather.selectedMonth)){
      this.props.onSetDay(1);
    }
  }

  onChangeMonth(event) {
    this.props.onSetMonth(event.target.options.selectedIndex);
  }

  onChangeDate(event) {
    this.props.onSetDay(event.target.value);
  }

  onSeeWeather() {
    this.props.onFindWeather({
      selectedDay: this.props.weather.selectedDay, 
      selectedMonth: this.props.weather.selectedMonth
    });
  }


  getNoOfDays(month){
    const today = new Date();
    return (new Date(today.getFullYear(), month + 1, 0)).getDate();
  }

  renderMonthSelection(monthNo) {
    if(monthNo || 0 === monthNo){
      const monthName = this.monthSelectionArray[monthNo];
      const monthSelection = this.monthSelectionArray.map((oneMonth, index) => (
        <option value={oneMonth} key={index}>{oneMonth}</option>
      ));
      return (
        <select className="browser-default" defaultValue={monthName} onChange={(e) => this.onChangeMonth(e)}>
          {monthSelection}
        </select>
      );
    }
    
  }

  renderMonthDateSelection(selectedDay) {
    if(+selectedDay > 0){
      const noOfdays = this.getNoOfDays(this.props.weather.selectedMonth);
      const dateSelection = [];
      for (let i = 1; i <= noOfdays; i += 1) {
        dateSelection.push((<option value={i} key={i}>{i}</option>));
      }
      return (
        <select className="browser-default" defaultValue={selectedDay}  onChange={(e) => this.onChangeDate(e)}>
          {dateSelection}
        </select>
      );
    }
  }

  renderMessage = (weatherText, weatherEvery3hour) => {
    if(!weatherEvery3hour || !weatherText) return;
    const weatherCell = weatherEvery3hour.map((w, index) => 
      (<td key={index}>
        <p>{w.time}</p>
        <p><img alt="weather-chart" src={`https://openweathermap.org/img/w/${w.weather.icon}.png`}/>{w.weather.main}</p>
        <p>{w.main.temp}°C</p>
      </td>));

    return ( 
    <div id="message">
      <p>{weatherText}</p>
      <table>
        <tbody>
        <tr>
          {weatherCell}
        </tr>
        </tbody>
        
      </table>
    </div>
  )};


  render() {
    return (
      <div>
        <h3 className="title-area">Forecast Weather</h3>
        <div className="content-area">
          <div className="search">
            <div className="search-group">
              <h5>Month</h5>
              {this.renderMonthSelection(this.props.weather.selectedMonth)}
            </div>
            <div className="search-group">
              <h5>day</h5>
              {this.renderMonthDateSelection(this.props.weather.selectedDay)}
            </div>
            <div className="search-group">
              <button className="btn indigo" type="submit" name="submit" onClick={(e) => this.onSeeWeather(e)}>check weather</button>
            </div>
          </div>
          <div className="search-date">
            { this.renderMessage(this.props.weather.weatherText, this.props.weather.weatherEvery3hour)}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => (
  {
    weather: state.weather
  }
);
const mapDispatchToProps = (dispatch) => ({
  onSetMonth: (month) => {
    dispatch(setMonth(month));
  },
  onSetDay: (day) => {
    dispatch(setDay(day));
  },
  onFindWeather: (monthAndDay) => {
    dispatch(findWeather(monthAndDay));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ForecastWeather);
export { mapDispatchToProps };

