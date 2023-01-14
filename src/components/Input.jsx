import React from 'react'
import "../styles/CSSInput.css"

const Input = () => {
    return (
        <>
            <form onSubmit="" className="form">
                <i className="fa-regular fa-circle form__icon"></i>
                <input
                    value="" type="text" name=""
                    className="form__input" placeholder="New to do..."
                    onChange=""
                />
            </form>

        </>
    )
}

export default Input