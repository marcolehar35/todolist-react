// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Trash2 } from 'react-feather';

// == Import
import './styles.css';

// == Composant
const Task = ({
  id,
  label,
  done,
  checkTask,
  removeTask,
}) => {
  // traitements
  const classCss = classNames('task', {
    // la classe css 'task--done' ne sera présente que si done vaut true
    'task--done': done,
  });

  const handleChange = () => {
    // Je déclenche la fonction qui vient de Todolist
    // Je veux modifier les data du state
    checkTask(id);
  };

  const handleClickTrash = () => {
    removeTask(id);
  };

  return (
    // dans le jsx
    <li className={classCss}>
      <input type="checkbox" checked={done} onChange={handleChange} />
      <span className="task-label">{label}</span>
      <Trash2 className="icon trash" onClick={handleClickTrash} />
    </li>
  );
};

Task.propTypes = {
  checkTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

// == Export
export default Task;
