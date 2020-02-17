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
  const tasks = tasksData;
  // mise en place du state
  // const [tasks, setTasks] = useState(tasksData);

  // utilisation d'un selector pour obtenir les tâches non effectuées
  const count = getTasksUndone(tasks).length;

  return (
    <div id="todo">
      <Form />
      <Counter count={count} />
      <List tasks={tasks} />
    </div>
  );
};

// == Export
export default Todolist;
