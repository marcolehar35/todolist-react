// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.css';
import Task from 'src/components/Task';

// == Composant
const List = ({ tasks }) => (
  <ul id="tasks-list">
    {tasks.map((task) => (
      <Task key={task.id} {...task} />
    ))}
  </ul>
);

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

// == Export
export default List;
