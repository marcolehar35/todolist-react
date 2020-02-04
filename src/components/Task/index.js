// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import './styles.css';

// == Composant
const Task = ({ label, done }) => {
  // traitements
  const classCss = classNames('task', {
    // la classe css 'task--done' ne sera présente que si done vaut true
    'task--done': done,
  });

  return (
    // dans le jsx
    <li className={classCss}>
      <input type="checkbox" checked={done} />
      <span className="task-label">{label}</span>
    </li>
  );
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

// == Export
export default Task;
