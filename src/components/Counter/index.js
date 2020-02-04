// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.css';

// == Composant
const Counter = ({ count }) => {
  let message = '';

  switch (count) {
    case 0:
      message = 'Aucune tâche en cours';
      break;
    case 1:
      message = 'Une tâche en cours';
      break;
    default:
      message = `${count} tâches en cours`;
      break;
  }

  return (
    <div id="todo-counter">
      {message}
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

// == Export
export default Counter;
