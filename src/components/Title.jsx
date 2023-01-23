import React from 'react'
import "../styles/Title.sass"

const Title = () => {
  const body = document.querySelector("body")

  /* const saveIn = (value) => {
    localStorage.setItem("dark-mode", value)
  } */
  
  const Theme = () => {

    // Captura de clases para aplicar el theme
    const divPpal = document.querySelector(".div-ppal")
    const form = document.querySelector(".form")
    const formIcon = document.querySelector(".form__icon")
    const formInput = document.querySelector(".form__input")
    const contItem = document.querySelector(".cont-item")
    const contItem2 = document.querySelector(".cont-item__item")
    const contFilters = document.querySelector(".cont-filters")
    const btnsMenu = document.querySelector(".btns-menu")


    body.classList.toggle("dark-mode")
    divPpal.classList.toggle("dark-mode")
    form.classList.toggle("dark-mode")
    formIcon.classList.toggle("dark-mode")
    formInput.classList.toggle("dark-mode")
    contItem.classList.toggle("dark-mode")
    contItem2.classList.toggle("dark-mode")
    contFilters.classList.toggle("dark-mode")
    btnsMenu.classList.toggle("dark-mode")

    /* saveIn(body.classList.contains("dark-mode")) */
  }

  // Función para guardar el theme en el local storage

  /* const memory = () => {
    const darkMode = localStorage.getItem("dark-mode")

    if (!darkMode) {
      saveIn(false)
    } else if (darkMode == true){
      body.classList.add("dark-mode")
    }
  }

  memory() */

  return (
    <>
      <div className="container">
        <h1 className="container__title">
          To do
        </h1>

        <div className="container__icon">
          <i
            className="fa-solid fa-circle-half-stroke"
            id='theme'
            onClick={Theme}
          ></i>
        </div>
      </div>

    </>
  )
}

export default Title