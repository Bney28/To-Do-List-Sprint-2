import React from 'react'
import "../styles/Title.sass"

const Title = () => {

  const Theme = () => {
    const body = document.querySelector("body")
    const divPpal = document.querySelector(".div-ppal")
    const form = document.querySelector(".form")
    const formIcon = document.querySelector(".form__icon")
    const formInput = document.querySelector(".form__input")
    const contItem= document.querySelector(".cont-item")
    const contItemItem = document.querySelector(".cont-item__item")
    const btnClear = document.querySelector(".btn-clear")
    const menuContent = document.querySelector(".menu-content")
    const contFilters = document.querySelector(".cont-filters")
    const btnsMenu = document.querySelector(".btns-menu")

    body.classList.toggle("dark-mode")
    divPpal.classList.toggle("dark-mode")
    form.classList.toggle("dark-mode")
    formIcon.classList.toggle("dark-mode")
    formInput.classList.toggle("dark-mode")
    contItem.classList.toggle("dark-mode")
    contItemItem.classList.toggle("dark-mode")
    btnClear.classList.toggle("dark-mode")
    menuContent.classList.toggle("dark-mode")
    contFilters.classList.toggle("dark-mode")
    btnsMenu.classList.toggle("dark-mode")

  }


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