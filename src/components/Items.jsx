import React from 'react'
import "../styles/CSSItems.css"

//Pendiente estilizar clase completed

const Items = ({ id, text, completed, toDoRealized, deleteToDo }) => {

    return (
        <>
            <div className={completed ? "cont-item completed" : "cont-item"}> {/* Ternario condicional para completed*/}
                <div
                    className="cont-item__container"
                    onClick={() => toDoRealized(id)}
                >
                    <i class="fa-regular fa-circle-check cont-item__icon"></i>
                    <p className="cont-item__item">
                        {text}
                    </p>
                </div>
                <i
                    className="fa-solid fa-xmark cont-item__close"
                    onClick={() => deleteToDo(id)}
                ></i>
            </div>
        </>
    )
}

export default Items