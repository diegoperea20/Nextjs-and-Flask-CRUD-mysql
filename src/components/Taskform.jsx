
"use client";
import React, { useState , useEffect} from "react";
function Tasks({API_URL}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const[editing , setEditing] = useState(false);
  const[id , setId] = useState('');

  const [tasks, setTasks] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!editing){
      const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      })
      const data = await response.json();
      console.log(data);
    } else {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      })
      const data = await response.json();
      console.log(data);
      setEditing(false);
      setId('');
    }

    await getTasks();
    setTitle("");
    setDescription("");
  };

  const getTasks = async() => {
    const response = await fetch(`${API_URL}/tasks`);
    const data = await response.json();
    setTasks(data);
  }

  useEffect(() => {
    getTasks();
  })

  const deleteTask = async(id) => {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    await getTasks();
  }

  const editTask = async(id) => {
    const response = await fetch(`${API_URL}/tasks/${id}`);
    const data = await response.json();

    setEditing(true);
    setId(id);

    setTitle(data.title);
    setDescription(data.description);
  }


  return (
    <div className="container">
    <h1 className="title">Tasks</h1>
  
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
          placeholder="Add a title"
          autoFocus
        />
        <br/>
        <br/>
        <input
          className="input"
          type="text"
          onChange={e => setDescription(e.target.value)}
          value={description}
          placeholder="Add a description"
          autoFocus
        />
        <br/>
        <br/>
        <button className="button">
          {editing ? "Update" : "Create"}
        </button>
      </form>
    </div>
    <br/>
    <br/>
  
    <div className="table-container">
      <div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
              <button className="button button-edit" onClick={(e) => editTask(task.id)}>Edit</button>
              <button className="button button-delete" onClick={(e) => deleteTask(task.id)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  </div>
  
  );
}

export default Tasks;