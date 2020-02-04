// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Composant
const Task = () => (
  <li className="task">
    <input type="checkbox" />
    <span className="task-label">La tache</span>
  </li>
);

// == Export
export default Task;
