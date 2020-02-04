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
  const [newTaskLabel, setNewTaskLabel] = useState('');

  // définition du nombre de taches non effectuées
  const count = getTasksUndone(tasks).length;

  const addTask = () => {
    // Generateur d'id : bas de gamme (en soldes :) )
    const highestId = Math.max(...tasks.map((task) => task.id));

    // construire une nouvelle tache
    const newTask = {
      id: highestId + 1,
      label: newTaskLabel,
      done: false,
    };

    // ajouter la tache au tableau des taches
    // NON !!!!!!
    // JAMAIS !!!!! On ne doit pas modifier le state par nous meme
    // Il ne faut pas modifier les données actuelles / existantes
    // const newTasks = tasks.push(newTask);

    // OK - on génère un nouveau tableau / génère une copie
    // const newTasks = tasks.map((task) => task);
    // newTasks.push(newTask);

    // CLASSE, RAPIDE et PARLANTE
    const newTasks = [...tasks, newTask];

    // changer => remplacer le state
    setTasks(newTasks);
    setNewTaskLabel('');
  };

  return (
    <div id="todo">
      <Form
        inputValue={newTaskLabel}
        changeInputValue={setNewTaskLabel}
        addTask={addTask}
      />
      <Counter count={count} />
      <List tasks={tasks} />
    </div>
  );
};

// == Export
export default Todolist;
