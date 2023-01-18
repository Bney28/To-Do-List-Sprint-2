import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Items from "./components/Items";
import Menu from "./components/Menu";
import Title from "./components/Title";
import "./styles/general.sass"

const App = () => {
  const [tareas, setTareas] = useState([])
  const [menu, setMenu] = useState("all")
  const [filter, setFilter] = useState(tareas)

  //Función para crear nuevas Tareas
  const newToDo = (todo) => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();

      const allToDos = [todo, ...tareas]
      setTareas(allToDos)
      /* console.log(allToDos) */
    }
  }

  //Función para eliminar Tareas
  const deleteToDo = (id) => {
    /* const allToDos = tareas.filter(todo => todo.id !== id) // Forma tradicional de escribirlo
    setTareas(allToDos) */

    setTareas(tareas.filter(todo => todo.id !== id)) // Forma abreviada de escribirlo
  }

  const clearCompleted = () => {
    const btnClear = tareas.filter(todo => !todo.completed);
    setMenu(btnClear)
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

  //Funciones para filtrar las Tareas

  const showAll = () => {
    setMenu("all")
  }

  const showActive = () => {
    setMenu("Active")
  }

  const showCompleted = () => {
    setMenu("Completed")
  }

  useEffect(() => {
    if (menu === "all") {
      setFilter(tareas);
    } else if (menu === "active") {
      const activeToDos = tareas.filter(todo => todo.completed === false);
      setFilter(activeToDos);
    } else if (menu === 'completed') {
      const completedToDos = tareas.filter(todo => todo.completed === true);
      setFilter(completedToDos);
    }
  }, [menu, tareas])


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
              tareas={filter}
              menu={menu}
              text={todo.text}
              completed={todo.completed}
              deleteToDo={deleteToDo}
              toDoRealized={toDoRealized}
              showAll={showAll}
              showActive={showActive}
              showCompleted={showCompleted}
              clearCompleted={clearCompleted}
            />
          )
        }
        <Menu
          menu={menu}
          filter={filter}
          total={tareas.length}
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
          clearCompleted={clearCompleted}
        />
      </div>
    </>
  );
}

export default App;
