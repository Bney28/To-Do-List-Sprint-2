import React from 'react'
import "../styles/Items.sass"

const Items = ({ id, text, completed, toDoRealized, deleteToDo }) => {

    return (
        <>
            <div className="cont-item">
                <i className={completed ? "fa-solid fa-circle-check cont-item__icon completed" : "fa-regular fa-circle-check cont-item__icon"}></i>
                <div
                    className={completed ? "cont-item__container completed" : "cont-item__container"} /* Ternario condicional para completed*/
                    onClick={() => toDoRealized(id)}
                >
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