// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.css';

// eslint-disable-next-line react/prefer-stateless-function
class Counter extends React.Component {
  // La méthode dédiée au rendu du composant
  // === au composant sous forme de function
  render() {
    console.log('render : Counter');
    const count = 123;

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
  }
}

// == Composant
// const Counter = ({ count }) => {
//   let message = '';

//   switch (count) {
//     case 0:
//       message = 'Aucune tâche en cours';
//       break;
//     case 1:
//       message = 'Une tâche en cours';
//       break;
//     default:
//       message = `${count} tâches en cours`;
//       break;
//   }

//   return (
//     <div id="todo-counter">
//       {message}
//     </div>
//   );
// };

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

// == Export
export default Counter;
