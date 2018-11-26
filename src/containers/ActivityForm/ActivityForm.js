import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import M from 'materialize-css';
import { addActivity, deleteActivity, editActivity, readActivity } from '../../actions/activitiesActions';
import { replace } from '../../actions/routerActions';

export class ActivityForm extends Component {
  constructor(){
    super();
  
    this.getDefaultValue = (params, activities, attribute) => {
      if (params && params.id) {
        const index = activities.findIndex((activity) => activity.id === parseInt(params.id, 10));
        if (index !== -1 && activities[index][attribute]) {
          return activities[index][attribute];
        }
      }
      return null;
    }
  }
  componentDidMount() {
    M.Datepicker.init(this.getDate);
    if(this.props.match.params && this.props.match.params.id){
      this.props.onReadActivity(parseInt(this.props.match.params.id),10);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.onDeleteActivity(parseInt(this.match.params.id, 10));
  }

  renderDeleteBtn(params) {
    if (params && params.id) {
      return (
        <button class="btn red" type="delete" onClick={(e) => this.handleDelete(e)}>Delete</button>
      );
    }
    return null;
  }

  render() {
    const { activities, dispatch, match } = this.props;
    this.activities = activities;
    this.dispatch = dispatch;
    this.match = match;
    return (
      <div>
        <h1>Activity</h1>
        <form onSubmit={(e) => this.props.onSubmit(e, this.match.params,this.getTitle.value,this.getDes.value,this.getDate.value)}>
          <label id="title" htmlFor="title">
            Title
            <input required type="text" id="titleInput"  placeholder="Title" ref={ (input) => {this.getTitle = input} } defaultValue={this.getDefaultValue(this.match.params, this.activities, 'title')} />
          </label>
          <label id="desc" htmlFor="desc">
            Description
            <input required type="text" rows="5" cols="28" placeholder="Description" ref={ (input) => {this.getDes = input} } defaultValue={this.getDefaultValue(this.match.params, this.activities, 'description')} />
          </label>
          <label id="date" htmlFor="date">
            Date
            <input required className='datepicker' ref={ (input) => {this.getDate = input} } type="text" placeholder="Date"  defaultValue={this.getDefaultValue(this.props.match.params,this.activities,'date') }/>
          </label>
          {this.renderDeleteBtn(this.match.params)}
          <button class="btn indigo" type="submit">Confirm</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  activities: state.activities,
});
const mapDispatchToProps = (dispatch) => ({
  onDeleteActivity: (id) => {
    dispatch(deleteActivity(parseInt(id, 10)));
    dispatch(replace('/activity'));
  },
  onSubmit: (e, params, title, description, date) => {
    if (e !== undefined && e.preventDefault) e.preventDefault();
    const activity = {
      title,
      description,
      date
    };
    if (params && params.id) {
      activity.id = parseInt(params.id, 10);
      dispatch(editActivity(activity.id, activity));
      dispatch(replace('/activity'));
    } else {
      dispatch(addActivity(activity));
      dispatch(replace('/activity'));
    }
  },
  onReadActivity: (id) => {
    dispatch(readActivity(id));
  }
});
ActivityForm.propTypes = {
  activities: PropTypes.array,
  onDeleteActivity: PropTypes.func,
  onSubmit: PropTypes.func,
  onReadActivity: PropTypes.func,
  match: PropTypes.object,
};
export default connect(mapStateToProps,mapDispatchToProps)(ActivityForm);
export { mapDispatchToProps };
