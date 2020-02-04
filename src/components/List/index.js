// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Task from 'src/components/Task';

// == Composant
const List = () => (
  <ul id="tasks-list">
    <Task />
    <Task />
    <Task />
  </ul>
);

// == Export
export default List;
