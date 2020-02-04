// == Import npm
import React, { useState } from 'react';

// == Import
import './style.css';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
import tasksData from 'src/data/tasks';
// selectors
import { getTasksUndone } from 'src/selectors/tasks';

// == Composant
const Todolist = () => {
  // mise en place du state
  const [tasks, setTasks] = useState(tasksData);
  const [newTaskLabel, setNewTaskLabel] = useState('coucou Y');

  // définition du nombre de taches non effectuées
  const count = getTasksUndone(tasks).length;

  return (
    <div id="todo">
      <Form
        inputValue={newTaskLabel}
        changeInputValue={setNewTaskLabel}
      />
      <Counter count={count} />
      <List tasks={tasks} />
    </div>
  );
};

// == Export
export default Todolist;
