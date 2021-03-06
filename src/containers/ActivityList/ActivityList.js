import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActivityItem from '../../components/ActivityItem';
import { readActivities } from '../../actions/activitiesActions';
import {replace} from '../../actions/routerActions'
import './ActivityList.css';
export class ActivityList extends Component {
  constructor() {
    super();
    this.onAddActivity = () => {
      this.props.onChangeRoute('activity/new')
    }
    this.onEditActivity = (id) => {
      this.props.onChangeRoute(`activity/${id}`)
    }
  }
  componentDidMount(){
    this.props.onReadActivities();
  }

  renderList(activities) {
    if ( activities && activities.length > 0) {
      const allActivities = activities.map((oneActivity) => {
        const content = (
          <div className="message collection col s12 m6">
            <span className="title collection-item">title:{oneActivity.title}</span>
            <span className="dateInfo collection-item">date:{oneActivity.date.toString()}</span>
          </div>
        );
        return (
          <div key={oneActivity.id} onClick={() => this.onEditActivity(oneActivity.id)}>
            <ActivityItem item={content} />
          </div>
        );
      });
      return (<div>{allActivities}</div>);
    }
    return (
      <p>No Activities.</p>
    );
  }

  render() {
    const { activities } = this.props;
    this.activities = activities;
    return (
      <div>
        <h3>ActivityList</h3>
        {this.renderList(this.activities)}
        <button className="btn indigo" type="submit" onClick={()=>this.onAddActivity()}>Add</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => (
  {
    activities: state.activities
  }
);
const mapDispatchToProps = (dispatch) => ({
  onReadActivities: () => {
    dispatch(readActivities());
  },
  onChangeRoute: (route) => {
    dispatch(replace(route));
  }

});
ActivityList.propTypes = {
  activities: PropTypes.array
};

export default connect(mapStateToProps,mapDispatchToProps)(ActivityList);
