// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Task from 'src/components/Task';

// == Composant
const List = () => (
  <ul id="tasks-list">
    {/* done équivalent done={true} */}
    <Task label="Dire bonjour" done />
    <Task label="Une todo en React" done={false} />
  </ul>
);

// == Export
export default List;
