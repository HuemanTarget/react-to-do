import "./App.css";
import NewSkillForm from "./components/NewSkillForm";
import ToDoList from "./components/ToDoList";

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {

  return (
    <div className='App'>
      <h1 className="teal-text">React Dev Skills</h1>
      <div className="padding-0">
        <ToDoList todos={skills} />
      </div>
      
      <hr></hr>
      <NewSkillForm />
    </div>
  );
}

export default App;
