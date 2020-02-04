// == Import npm
import React from 'react';

// == Import
import './style.css';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';

// == Composant
const Todolist = () => (
  <div id="todo">
    <Form />
    <Counter count={123} />
    <List />
  </div>
);

// == Export
export default Todolist;
