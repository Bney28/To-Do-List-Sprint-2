import React from "react";
import Input from "./components/Input";
import Items from "./components/Items";
import ItemsContent from "./components/ItemsContent";
import Menu from "./components/Menu";
import Title from "./components/Title";
import "./styles/CSSgeneral.css"

function App() {
  return (
    <>
      <Title />
      <Input />
      <ItemsContent>
        <Items />
      </ItemsContent>
      <Menu />
    </>
  );
}

export default App;
