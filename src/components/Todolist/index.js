// == Import npm
import React from 'react';

// == Import
import './style.css';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
import tasksData from 'src/data/tasks';
// selectors
import { getTasksUndone } from 'src/selectors/tasks';

// console.log(new React.Component)
// == Composant
// eslint-disable-next-line react/prefer-stateless-function
class Todolist extends React.Component {
  // == __construct. est appelé lors de l'instanciation : <Todolist /> => new Todolist()
  // surcharge du constructeur du parent
  // on récupère les props
  constructor(props) {
    // Mais on veut que le constructeur du parent d'exécute quand même
    // On appelle le constructeur du parent : les étapes de création obligatoires de React
    // On fournit les props au constructeur du parent (qu'il les prépare)
    super(props);
    console.log('constructor : instanciation');
    // Je définis le state du composant (sous forme de classe) dans son constructeur
    // React reconnait la valeur `state` et lui applique un traitement spécifique
    this.state = {
      message: 'coucou',
    };
  }

  // Rendu du composant (lié à react)
  render() {
    console.log('render : rendu du composant');
    const tasks = tasksData;
    // utilisation d'un selector pour obtenir les tâches non effectuées
    const count = getTasksUndone(tasks).length;

    return (
      <div id="todo">
        <Form />
        <Counter count={count} />
        <List tasks={tasks} />
      </div>
    );
  }
}

// const Todolist = () => {
//   const tasks = tasksData;
//   // utilisation d'un selector pour obtenir les tâches non effectuées
//   const count = getTasksUndone(tasks).length;

//   return (
//     <div id="todo">
//       <Form />
//       <Counter count={count} />
//       <List tasks={tasks} />
//     </div>
//   );
// };

// == Export
export default Todolist;
