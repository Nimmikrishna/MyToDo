import logo from './logo.svg';
import './App.css';
import AddTaskForm from '../TaskForm/TaskForm';
import TaskDisplay from '../TaskTable/TaskTable';

function App() {
  return (
    // In React, when you want to return multiple elements from a component's render method,
    // they must be wrapped in a single parent element. Fragments(<> ... </>) provide a way to do this 
    // without introducing an additional div or other HTML element into the output.
      <>
      <header>
        <h1>ToDo List</h1>
      </header>
      <main>
        <section>
          <h2>Add Task</h2>
          <AddTaskForm />
        </section>
        <section>
          <h2>All Tasks</h2>
          <TaskDisplay />
        </section>
      </main>
    </>
  );
};

export default App;
