
import TaskForm from "@/components/Taskform";
import "./Tasks.css";
//Conection to backend flask
const API_URL = process.env.BACKEND;

function Tasks() {
  return (
    <div className="home">
  <TaskForm API_URL={API_URL} />
  </div>
  );
}

export default Tasks;
