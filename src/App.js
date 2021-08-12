import "./App.css";
import NewSkillForm from "./components/NewSkillForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className='App'>
      <h1>React To-Do</h1>
      <ToDoList />
      <hr></hr>
      <NewSkillForm />
    </div>
  );
}

export default App;
