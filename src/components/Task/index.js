// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import './styles.css';

// == Composant
const Task = ({ label, done, checkTask }) => {
  // traitements
  const classCss = classNames('task', {
    // la classe css 'task--done' ne sera présente que si done vaut true
    'task--done': done,
  });

  const handleChange = () => {
    // Je déclenche la fonction qui vient de Todolist
    // Je veux modifier les data du state
    checkTask();
  };

  return (
    // dans le jsx
    <li className={classCss}>
      <input type="checkbox" checked={done} onChange={handleChange} />
      <span className="task-label">{label}</span>
    </li>
  );
};

Task.propTypes = {
  checkTask: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

// == Export
export default Task;
