// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.css';

// == Composant
const Form = ({ inputValue, changeInputValue }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Envoi du formulaire');
  };

  const handleChange = (evt) => {
    // Je déclenche la mofig du state pour le champ
    // inputValue sera modifié dans le state (newTaskLabel)
    changeInputValue(evt.target.value);
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="Ajouter une tâche"
        id="todo-input"
        autoComplete="off"
        name="inputValue"
        type="text"
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
