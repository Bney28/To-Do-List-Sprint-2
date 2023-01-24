import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Items from "./components/Items";
import Menu from "./components/Menu";
import Title from "./components/Title";
import "./styles/general.sass"

const App = () => {
  const [tareas, setTareas] = useState([])
  const [menu, setMenu] = useState("All") /* ActiveFilter */
  const [filter, setFilter] = useState(tareas) /* FilteredTodos */

  //Función para crear nuevas Tareas
  const newToDo = (todo) => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();
      setTareas([...tareas, todo])
    }
  }

  //Función para eliminar Tareas
  const deleteToDo = (id) => {
    setTareas(tareas.filter(todo => todo.id !== id)) // Forma abreviada de escribirlo
    /* console.log("click delete one"); */
    
    /* const allToDos = tareas.filter(todo => todo.id !== id) // Forma tradicional de escribirlo
    setTareas(allToDos) */
  }

  const clearCompleted = () => {
    setTareas(tareas.filter(todo => !todo.completed))
    /* console.log("click btn clear"); */
  }

  //Función para marcar Tareas Completadas
  const toDoRealized = (id) => {
    const allToDos = tareas.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTareas(allToDos)
    console.log(allToDos);
  }

  //UseEffect para filtrar las Tareas

  useEffect(() => {
    if (menu === "All") {
      setFilter(tareas);
    } else if (menu === "Active") {
      setFilter(tareas.filter(todo => todo.completed === false));
    } else if (menu === 'Completed') {
      setFilter(tareas.filter(todo => todo.completed === true));
    }
  }, [menu, tareas])


  return (
    <>
      <Title />
      <Input onSubmit={newToDo} />
      <div className="div-ppal">
        {
          filter.map((todo) =>
            <Items
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              deleteToDo={deleteToDo}
              toDoRealized={toDoRealized}
              /* tareas={filter} */
            />
          )
        }
        <Menu
          menu={menu}
          setMenu={setMenu}
          total={tareas.length}
          clearCompleted={clearCompleted}
        />
      </div>
      <div className="footer-text">
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
}


export default App;