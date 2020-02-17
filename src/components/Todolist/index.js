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

// Cycles de vie
// -------------
// points de passage pour le composant
// - constructor : instanciation
// - render : rendu
// - componentDidMount : la première construction (composant dans le dom)

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
    // le state initial de l'instance (composant)
    this.state = {
      tasks: tasksData,
      newTaskLabel: 'Coucou Y',
    };

    // Je dois "donner" la valeur de this aux méthodes souhaitant l'utiliser
    this.changeInputValue = this.changeInputValue.bind(this);
    // https://i.imgur.com/QgeBt4j.png :+1:
  }

  // Cycles de vie
  // componentDidMount similaire à useEffect(() => { ... }, []);
  // utile pour : ajax, manip sur le DOM, poser des events sur document, définir des timers, ...
  componentDidMount() {
    console.log('componentDidMount : composant monté pour la 1ere fois');
    document.title = this.state.newTaskLabel;
  }

  // utile pour : manip sur le DOM, poser des events sur document, définir des timers, ...
  componentDidUpdate() {
    console.log('componentDidUpdate : composant mit à jour');
    document.title = this.state.newTaskLabel;
  }

  changeInputValue(value) {
    console.log('Todolist :', value);

    // Pour modifier le state de react
    // on lui donne le fragment de state à changer
    this.setState({
      newTaskLabel: value,
    });
  }

  // Rendu du composant (lié à react)
  render() {
    console.log('render : rendu du composant');
    // const tasks = this.state.tasks;
    // ou avec destructuration :
    const { tasks, newTaskLabel } = this.state;

    // utilisation d'un selector pour obtenir les tâches non effectuées
    const count = getTasksUndone(tasks).length;

    return (
      <div id="todo">
        <Form inputValue={newTaskLabel} changeInputValue={this.changeInputValue} />
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
