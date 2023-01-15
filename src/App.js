import React, { useState } from "react";
import Input from "./components/Input";
import Items from "./components/Items";
import Menu from "./components/Menu";
import Title from "./components/Title";
import "./styles/CSSgeneral.css"

const App = () => {
  const [tareas, setTareas] = useState([])

  //Función para crear nuevas Tareas
  const newToDo = (todo) => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();

      const allToDos = [todo, ...tareas]
      setTareas(allToDos)
      console.log(allToDos)
    }
  }

  //Función para eliminar Tareas
  const deleteToDo = (id) => {
    /* const allToDos = tareas.filter(todo => todo.id !== id) // Forma tradicional de escribirlo
    setTareas(allToDos) */

    setTareas(tareas.filter(todo => todo.id !== id)) // Forma abreviada de escribirlo
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

  return (
    <>
      <Title />
      <Input onSubmit={newToDo} />
      <div className="div-ppal">
        {
          tareas.map((todo) =>
            <Items
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              deleteToDo={deleteToDo}
              toDoRealized={toDoRealized}
            />
          )
        }
        <Menu />
      </div>
    </>
  );
}

export default App;
