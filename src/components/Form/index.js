// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.css';

// == Composant
const Form = ({ inputValue, changeInputValue }) => {
  const handleChange = (evt) => {
    console.log(evt.target.value);
    // On va changer le contenu du state
    changeInputValue(evt.target.value);
  };

  return (
    <form id="todo-form">
      <input
        placeholder="Ajouter une tâche"
        id="todo-input"
        autoComplete="off"
        name="inputValue"
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
    </form>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};

// == Export
export default Form;
