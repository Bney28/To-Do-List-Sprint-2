import React, { useState } from "react";
import Input from "./components/Input";
import Items from "./components/Items";
import ItemsContent from "./components/ItemsContent";
import Menu from "./components/Menu";
import Title from "./components/Title";
import "./styles/CSSgeneral.css"

function App() {
  const [todos, setTodos] = useState ()

  const newToDo = (text) =>{
    console.log(text);  
  
  }

  return (
    <>
      <Title />
      <Input newToDo={newToDo}/>
      <ItemsContent>
        <Items />
      </ItemsContent>
      <Menu />
    </>
  );
}

export default App;
