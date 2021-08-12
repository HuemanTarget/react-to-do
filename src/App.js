import "./App.css";
import NewSkillForm from "./components/NewSkillForm";
import ToDoList from "./components/ToDoList";

const todos = [
  'Have Fun',
  'Learn React',
  'Learn the MERN-Stack'
];

function App() {

  return (
    <div className='App'>
      <h1>React To-Do</h1>
      <ToDoList todos={todos} />
      <hr></hr>
      <NewSkillForm />
    </div>
  );
}

export default App;
