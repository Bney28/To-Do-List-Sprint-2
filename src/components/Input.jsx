import React, { useState } from 'react'
import "../styles/CSSInput.css"

const Input = ({newToDo}) => {
    const [text, setText] = useState("")
    
    const handleInput = (e) =>{
        if (e.key.toLowerCase() === 'enter') {
            e.preventDefault()
            newToDo(text)
            setText("")
        }
    }

    /* console.log(handleInput); */

    return (
        <>
            <form className="form">
                <i className="fa-regular fa-circle form__icon"></i>
                <input
                    value={text} type="text"
                    className="form__input"
                    placeholder="New to do..."
                    onChange={e => setText(e.target.value)}
                    onKeyDown={e => handleInput(e)}
                    />
            </form>
        </>
    )
    
}

export default Input