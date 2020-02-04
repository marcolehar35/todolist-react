// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Composant
const Form = () => (
  <form id="todo-form">
    <input
      placeholder="Ajouter une tâche"
      id="todo-input"
      autoComplete="off"
      name="inputValue"
      type="text"
    />
  </form>
);

// == Export
export default Form;
