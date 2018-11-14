import React from 'react';
import PropTypes from 'prop-types';

const ActivityItem = (props) => {
  return (
    <div>
      {props.item}
    </div>
  );
};
ActivityItem.propTypes = {
  item: PropTypes.any
};
export default ActivityItem;
